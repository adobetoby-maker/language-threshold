import {test} from 'node:test';
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {mkdtempSync,rmSync,readFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {pathToFileURL} from 'node:url';
const folder=mkdtempSync(join(tmpdir(),'lt-download-test-'));
execFileSync('node_modules/.bin/esbuild',['api/email-capture.ts','--bundle','--platform=node','--format=esm','--outfile='+join(folder,'handler.mjs')],{stdio:'ignore'});
const {default:handler}=await import(pathToFileURL(join(folder,'handler.mjs')).href);
const originalFetch=globalThis.fetch;
let sequence=0;
async function request(changes={},options={}){
 const calls=[];process.env.LEADERCRM_FORM_KEY='test-signup-only-key';delete process.env.RESEND_API_KEY;
 if(options.email)process.env.RESEND_API_KEY='test-delivery-key';if(options.noKey)delete process.env.LEADERCRM_FORM_KEY;
 globalThis.fetch=async(url,opts)=>{calls.push({url,opts,body:JSON.parse(opts.body)});if(options.throwCrm&&url.includes('leaderhq'))throw Error('synthetic timeout');return new Response(JSON.stringify(url.includes('resend')?{id:options.emailId===false?undefined:'test-message-id'}:{ok:true}),{status:url.includes('leaderhq')?(options.crmStatus||200):(options.emailStatus||200)});};
 let status=200,result;const headers={};const res={setHeader(k,v){headers[k]=v;return this},status(n){status=n;return this},json(x){result=x;return this}};
 try{await handler({method:'POST',headers:{host:'test.example',origin:'https://test.example'},body:{email:`person${++sequence}@example.test`,consent:true,...changes},...options.req},res);}finally{globalThis.fetch=originalFetch;}
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
test('delivery emails use allowlisted URLs and escaped user input with idempotency',async()=>{const r=await request({name:'<img src=x onerror=alert(1)>'},{email:true});assert.equal(r.status,200);assert.equal(r.result.emailStatus,'accepted');assert.equal(r.calls.length,2);assert.equal(r.calls[1].opts.headers['Idempotency-Key'].length,64);assert.ok(!r.calls[1].body.html.includes('<img'));assert.ok(r.calls[1].body.html.includes('&lt;img'));assert.ok(r.calls[1].body.text.includes(r.result.downloadUrl))});
test('delivery provider failure keeps the saved lead and immediate download',async()=>{const r=await request({}, {email:true,emailStatus:500,emailId:false});assert.equal(r.status,200);assert.equal(r.result.emailStatus,'unavailable');assert.ok(r.result.downloadUrl);assert.match(r.result.notice,/could not email/)});
test('repeat requests are limited before external services are called',async()=>{const email='repeat@example.test';for(let n=0;n<3;n++)assert.equal((await request({email})).status,200);const r=await request({email});assert.equal(r.status,429);assert.equal(r.calls.length,0)});
process.on('exit',()=>{globalThis.fetch=originalFetch;rmSync(folder,{recursive:true,force:true})});

test('a selected role PDF is allowlisted, returned directly, and recorded in the CRM source',async()=>{const catalog=JSON.parse(readFileSync('docs/free-downloads-catalog.json','utf8'));const resource=catalog.find(x=>x.id!==x.category+'-trifold'&&x.format==='PDF');const r=await request({resourceId:resource.id});assert.equal(r.status,200);assert.equal(r.result.downloadUrl,resource.url);assert.equal(r.result.format,'PDF');assert.match(r.calls[0].body.source,new RegExp(resource.id));});
