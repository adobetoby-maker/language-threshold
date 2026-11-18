import {test} from 'node:test';
import {createHmac} from 'node:crypto';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {mkdtempSync,rmSync,readFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {pathToFileURL} from 'node:url';
import {nativeDownloadId,productMarketingId,PRODUCT_MARKETING_VERSION} from '../server/native-download-id.js';
const proofVectors=JSON.parse(readFileSync(new URL('./fixtures/native-download-vectors.json',import.meta.url),'utf8')).vectors;
test('actual source event-ID helper matches the shared fixed vectors',()=>{
 for(const v of proofVectors)assert.equal(nativeDownloadId(v.site,v.email,v.resourceId,v.bucket,v.key),v.expected);
});
const folder=mkdtempSync(join(tmpdir(),'lt-download-test-'));
execFileSync('node_modules/.bin/esbuild',['api/email-capture.ts','--bundle','--platform=node','--format=esm','--outfile='+join(folder,'handler.mjs')],{stdio:'ignore'});
const {default:handler}=await import(pathToFileURL(join(folder,'handler.mjs')).href);
const originalFetch=globalThis.fetch;
let sequence=0;
async function request(changes={},options={}){
 const calls=[];for(const k of ['TURNSTILE_SITE_KEY','TURNSTILE_SECRET','TURNSTILE_HOSTNAMES'])delete process.env[k];
 if(options.nativeFrom && options.noProtection!==true || options.protection){process.env.TURNSTILE_SITE_KEY='synthetic-site-key';process.env.TURNSTILE_SECRET='synthetic-secret';process.env.TURNSTILE_HOSTNAMES='languagethreshold.com';}
 delete process.env.NATIVE_CONFIRMATION_FROM;if(options.nativeFrom)process.env.NATIVE_CONFIRMATION_FROM=options.nativeFrom;process.env.DOWNLOAD_LEAD_KEY='test-report-key-'.padEnd(64,'x');process.env.LEADERCRM_FORM_KEY='test-signup-only-key';delete process.env.RESEND_API_KEY;
 if(options.email)process.env.RESEND_API_KEY='test-delivery-key';if(options.noKey)delete process.env.LEADERCRM_FORM_KEY;
 globalThis.fetch=async(url,opts)=>{calls.push({url,opts,body:opts.body instanceof URLSearchParams ? Object.fromEntries(opts.body) : JSON.parse(opts.body)});if(url.includes('siteverify'))return new Response(JSON.stringify(options.verifyResult || {success:true,action:'resource_download',hostname:'languagethreshold.com'}));if(url.includes('capture-guard'))return new Response(JSON.stringify({allowed:!options.budgetStatus || options.budgetStatus===200}),{status:options.budgetStatus||200});if(options.throwCrm&&url.includes('leaderhq'))throw Error('synthetic timeout');return new Response(JSON.stringify(url.includes('resend')?(options.emailBody || {id:options.emailId===false?undefined:'test-message-id'}):{ok:true}),{status:url.includes('leaderhq')?(options.crmStatus||200):(url.includes('download-lead')?(options.reportStatus||200):(url.includes('webhooks')?(options.marketingStatus||200):(options.emailStatus||200)))});};
 let status=200,result;const headers={};const res={setHeader(k,v){headers[k]=v;return this},status(n){status=n;return this},json(x){result=x;return this}};
 try{await handler({method:'POST',headers:{host:options.nativeFrom||options.protection?'languagethreshold.com':'test.example',origin:options.nativeFrom||options.protection?'https://languagethreshold.com':'https://test.example'},body:{'cf-turnstile-response':'synthetic-fresh-token-'+sequence,email:`person${++sequence}@example.test`,consent:true,...changes},...options.req},res);}finally{globalThis.fetch=originalFetch;}
 return {status,result,calls,headers};
}
test('GET is rejected without calling external services',async()=>{const r=await request({}, {req:{method:'GET'}});assert.equal(r.status,405);assert.equal(r.calls.length,0)});
test('invalid email is rejected',async()=>assert.equal((await request({email:'not-an-email'})).status,400));
test('explicit email request is required',async()=>assert.equal((await request({consent:false})).status,400));
test('arbitrary redirect or download resource is rejected',async()=>{const r=await request({resourceId:'https://evil.example'});assert.equal(r.status,400);assert.equal(r.calls.length,0)});
test('cross-origin submissions are rejected',async()=>{const r=await request({}, {req:{headers:{host:'test.example',origin:'https://evil.example'}}});assert.equal(r.status,403);assert.equal(r.calls.length,0)});
test('honeypot submissions do not send mail',async()=>{const r=await request({website:'spam'});assert.equal(r.status,400);assert.equal(r.calls.length,0)});
test('missing CRM configuration fails closed',async()=>{const r=await request({}, {noKey:true});assert.equal(r.status,503);assert.equal(r.calls.length,0)});
test('CRM rejection never reports a captured lead or emails a download',async()=>{const r=await request({}, {crmStatus:503,email:true});assert.equal(r.status,503);assert.equal(r.calls.length,1);assert.equal(r.result.downloadUrl,undefined)});
test('CRM rate limit is surfaced without sending another email',async()=>{const r=await request({}, {crmStatus:429,email:true});assert.equal(r.status,429);assert.equal(r.calls.length,1)});
test('CRM timeout is not mistaken for success',async()=>{const r=await request({}, {throwCrm:true});assert.equal(r.status,503);assert.equal(r.result.ok,false)});
test('captured leads get an immediate resource even without delivery email',async()=>{const r=await request({email:' TEST@EXAMPLE.TEST ',utm_source:'facebook',utm_campaign:'free-trifold',utm_content:'slide-3'});assert.equal(r.status,200);assert.equal(r.result.ok,true);assert.equal(r.result.format,'PDF');assert.match(r.result.downloadUrl,/^https:\/\/.+\/assets\/free-downloads\/.+\.pdf$/);assert.equal(r.result.emailStatus,'unavailable');assert.equal(r.calls[0].body.email,'test@example.test');assert.match(r.calls[0].body.source,/source=facebook/);assert.match(r.calls[0].body.source,/content=slide-3/);assert.equal(r.calls[0].body.type,'Learner');assert.equal(r.headers['Cache-Control'],'no-store');assert.equal(JSON.stringify(r.result).includes('test-signup-only-key'),false)});
test('delivery emails use allowlisted URLs and escaped user input with idempotency',async()=>{const r=await request({name:'<img src=x onerror=alert(1)>'},{email:true});assert.equal(r.status,200);assert.equal(r.result.emailStatus,'accepted');assert.equal(r.calls.length,4);const mail=r.calls.find(c=>c.url.includes('api.resend.com'));assert.equal(mail.opts.headers['Idempotency-Key'].length,64);assert.ok(!mail.body.html.includes('<img'));assert.ok(mail.body.html.includes('&lt;img'));assert.ok(mail.body.text.includes(r.result.downloadUrl))});
test('delivery provider failure keeps the saved lead and immediate download',async()=>{const r=await request({}, {email:true,emailStatus:500,emailId:false});assert.equal(r.status,200);assert.equal(r.result.emailStatus,'unavailable');assert.ok(r.result.downloadUrl);assert.match(r.result.notice,/could not email/)});
test('repeat requests are limited before external services are called',async()=>{const email='repeat@example.test';for(let n=0;n<3;n++)assert.equal((await request({email})).status,200);const r=await request({email});assert.equal(r.status,429);assert.equal(r.calls.length,0)});
process.on('exit',()=>{globalThis.fetch=originalFetch;rmSync(folder,{recursive:true,force:true})});

test('a selected role PDF is allowlisted, returned directly, and recorded in the CRM source',async()=>{const catalog=JSON.parse(readFileSync('docs/free-downloads-catalog.json','utf8'));const resource=catalog.find(x=>x.id!==x.category+'-trifold'&&x.format==='PDF');const r=await request({resourceId:resource.id});assert.equal(r.status,200);assert.equal(r.result.downloadUrl,resource.url);assert.equal(r.result.format,'PDF');assert.match(r.calls[0].body.source,new RegExp(resource.id));});

test('reporting outage is visible after CRM acceptance and does not send an email copy',async()=>{const r=await request({}, {email:true,reportStatus:503});assert.equal(r.status,503);assert.equal(r.calls.length,2);assert.equal(r.result.downloadUrl,undefined);assert.match(r.result.error,/email request was saved/)});
test('report contains clean attribution and signed server-only credentials',async()=>{const r=await request({signup_page:'/free-downloads/?email=secret',landing_page:'/nursing/',referrer_host:'google.com',utm_campaign:'nursing'});assert.equal(r.status,200);const report=r.calls.find(c=>c.url.includes('/api/download-lead'));assert.equal(report.body.signup_page,'/free-downloads/');assert.equal(report.body.landing_page,'/nursing/');assert.equal(report.body.utm_campaign,'nursing');assert.equal(report.opts.headers['X-Lead-Signature'].length,64);assert.equal(JSON.stringify(r.result).includes('X-Lead-Signature'),false)});


test('native activation removes the Leader invitation dependency and keeps owner capture plus the resource email',async()=>{
 const r=await request({utm_campaign:'language-threshold-practice-v1'},{nativeFrom:'2026-01-01T00:00:00Z',noKey:true,email:true});
 assert.equal(r.status,200);assert.equal(r.result.emailStatus,'accepted');assert.equal(r.calls.some(c=>c.url.includes('leaderhq')),false);
 const report=r.calls.find(c=>c.url.includes('/api/download-lead')),feed=r.calls.find(c=>c.url.includes('/api/webhooks'));
 assert.ok(report);assert.ok(feed);assert.equal(report.body.invitation_owner,undefined);assert.equal(report.body.created_at,undefined);
 assert.equal(feed.body.invitation_owner,'native');assert.equal(feed.body.event_id,createHmac('sha256',process.env.DOWNLOAD_LEAD_KEY).update(`native-download:v1:${feed.body.site}:${feed.body.email}:${feed.body.resource_id}:${Math.floor(Date.parse(feed.body.created_at)/600000)}`).digest('hex'));assert.equal(report.body.event_id,feed.body.event_id);assert.ok(Number.isFinite(Date.parse(feed.body.created_at)));assert.equal(feed.body.utm_campaign,'language-threshold-practice-v1');
 for(const c of [report,feed])assert.equal(c.opts.headers['X-Lead-Signature'],createHmac('sha256',process.env.DOWNLOAD_LEAD_KEY).update(c.opts.headers['X-Lead-Time']+'.'+c.opts.body).digest('hex'));
 assert.equal(r.calls.filter(c=>c.url.includes('resend')).length,1);
});
test('future or malformed activation retains Leader as the single invitation owner',async()=>{
 for(const nativeFrom of ['2999-01-01T00:00:00Z','bad-value']){
  const r=await request({},{nativeFrom});assert.equal(r.status,200);assert.equal(r.calls.filter(c=>c.url.includes('leaderhq')).length,1);
  assert.equal(r.calls.find(c=>c.url.includes('/api/webhooks')).body.invitation_owner,'leader');
 }
});
test('a missed marketing callback is retried but does not hold the resource or email hostage',async()=>{
 const r=await request({},{nativeFrom:'2026-01-01T00:00:00Z',marketingStatus:503,email:true});
 assert.equal(r.status,200);assert.equal(r.result.emailStatus,'accepted');assert.ok(r.result.downloadUrl);
 const feeds=r.calls.filter(c=>c.url.includes('/api/webhooks'));assert.equal(feeds.length,2);assert.equal(feeds[0].opts.body,feeds[1].opts.body);
});
test('public confirmation ownership status reveals configuration only and never contacts or credentials',async()=>{
 const r=await request({},{nativeFrom:'2999-01-01T00:00:00Z',req:{method:'GET',url:'/api/email-capture?status=confirmation'}});
 assert.equal(r.status,200);assert.deepEqual(r.result,{site:'languagethreshold.com',owner:'leader',nativeFrom:'2999-01-01T00:00:00Z',policyVersion:'lt-practice-separate-v1',sourceDeployment:process.env.VERCEL_DEPLOYMENT_ID||null,captureProtection:{version:1,ready:true}});assert.equal(r.calls.length,0);
});

test('native mode cannot capture or email without complete protection configuration',async()=>{
 const r=await request({}, {nativeFrom:'2026-01-01T00:00:00Z',noProtection:true,email:true});assert.equal(r.status,503);assert.equal(r.calls.length,0);
});
test('siteverify rejects wrong hostname, wrong action, and non-boolean success before recipient actions',async()=>{
 for(const changed of [{hostname:'localhost'},{hostname:'evil.example'},{action:'login'},{success:'true'},{success:false}]){
  const r=await request({}, {nativeFrom:'2026-01-01T00:00:00Z',email:true,verifyResult:{success:true,action:'resource_download',hostname:'languagethreshold.com',...changed}});assert.equal(r.status,403);assert.equal(r.calls.length,1);
 }
});
test('missing or oversized bot tokens and absent origin fail before Siteverify',async()=>{
 for(const token of ['', 'x'.repeat(2049)]){
  const r=await request({'cf-turnstile-response':token},{nativeFrom:'2026-01-01T00:00:00Z'});assert.equal(r.status,403);assert.equal(r.calls.length,0);
 }
 const r=await request({}, {nativeFrom:'2026-01-01T00:00:00Z',req:{headers:{host:'languagethreshold.com'}}});assert.equal(r.status,403);assert.equal(r.calls.length,0);
});
test('durable quota rejection prevents owner capture, marketing intake and resource email',async()=>{
 const r=await request({}, {nativeFrom:'2026-01-01T00:00:00Z',email:true,budgetStatus:429});assert.equal(r.status,429);assert.equal(r.calls.length,2);assert.ok(r.calls[1].url.endsWith('/api/capture-guard'));assert.equal(JSON.stringify(r.calls[1].body).includes('@'),false);
});
test('quota outage retries identical signed bytes then fails closed before recipient actions',async()=>{
 const r=await request({}, {nativeFrom:'2026-01-01T00:00:00Z',email:true,budgetStatus:503});assert.equal(r.status,503);assert.equal(r.calls.length,3);assert.equal(r.calls[1].opts.body,r.calls[2].opts.body);
 assert.equal(r.calls[1].opts.headers['X-Lead-Signature'],createHmac('sha256',process.env.DOWNLOAD_LEAD_KEY).update('capture-guard:v1:'+r.calls[1].opts.headers['X-Lead-Time']+'.'+r.calls[1].opts.body).digest('hex'));
});

test('malformed delivery acknowledgement never claims accepted but preserves immediate resource',async()=>{const r=await request({}, {email:true,emailBody:{id:123}});assert.equal(r.status,200);assert.equal(r.result.emailStatus,'unavailable');assert.ok(r.result.downloadUrl);});

test('new product acceptance namespace has a fixed cross-system wire vector',()=>{const v={"site": "medicalspanish.app", "email": "PERSON@language-demo.com", "resourceId": "medical-nursing", "bucket": 2991672, "key": "synthetic-vector-key-0123456789abcdef"};assert.equal(productMarketingId(v.site,v.email,v.resourceId,v.bucket,v.key),'2e1c31fd1748c22e974d88f5ab5dca6d2a7a3bd3e093c9676552d778a7048f14');assert.notEqual(nativeDownloadId(v.site,v.email,v.resourceId,v.bucket,v.key),'2e1c31fd1748c22e974d88f5ab5dca6d2a7a3bd3e093c9676552d778a7048f14')});

test('explicit new-policy acceptance signs a durable recoverable grant while old form submissions retain invitation ownership',async()=>{
 const r=await request({policyVersion:PRODUCT_MARKETING_VERSION},{nativeFrom:'2026-01-01T00:00:00Z',noKey:true,email:true});assert.equal(r.status,200);assert.equal(r.result.marketingAccepted,true);
 const report=r.calls.find(c=>c.url.includes('/api/download-lead')), marketing=r.calls.find(c=>c.url.includes('/api/webhooks')),delivery=r.calls.find(c=>c.url==='https://api.resend.com/emails');assert.ok(report);assert.ok(marketing);assert.equal(marketing.body.invitation_owner,'marketing_gate');assert.equal(report.body.event_id,marketing.body.event_id);
 assert.equal(productMarketingId(marketing.body.site,marketing.body.email,marketing.body.resource_id,Math.floor(Date.parse(marketing.body.created_at)/600000),process.env.DOWNLOAD_LEAD_KEY),report.body.event_id);assert.match(delivery.body.text,/practice and product emails/);assert.doesNotMatch(delivery.body.text,/Only confirm/);
 const old=await request({policyVersion:'lt-practice-separate-v1'},{nativeFrom:'2026-01-01T00:00:00Z',noKey:true});assert.equal(old.status,200);assert.equal(old.result.marketingAccepted,false);assert.equal(old.calls.find(c=>c.url.includes('/api/webhooks')).body.invitation_owner,'native');
});
test('unknown policy or an unprovisioned direct source cannot create a grant or send a resource',async()=>{
 const unknown=await request({policyVersion:'forged-policy'});assert.equal(unknown.status,400);assert.equal(unknown.calls.length,0);
 const inactive=await request({policyVersion:PRODUCT_MARKETING_VERSION});assert.equal(inactive.status,503);assert.equal(inactive.calls.length,0);
});
