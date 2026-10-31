import {execFileSync} from 'node:child_process';
import {existsSync,statSync,readFileSync,writeFileSync} from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
const host = 'https://languagethreshold.com';
const source = readFileSync('src/App.tsx','utf8');
const imports = new Map([...source.matchAll(/const\s+(\w+)\s*=\s*lazy\(\(\)\s*=>\s*import\(['"](.+?)['"]\)/g)].map(m=>[m[1],`src/${m[2]}.tsx`]));
function dependencies(file,seen=new Set()) {
  file=path.normalize(file);
  if(seen.has(file)) return seen;
  seen.add(file);
  for(const m of readFileSync(file,'utf8').matchAll(/(?:from\s*|import\s*\(|import\s*)['"]([^'"]+)['"]/g)) {
    if(!m[1].startsWith('.')) continue;
    const base=path.join(path.dirname(file),m[1]);
    const found=[base,...['.tsx','.ts','.json','.css','/index.ts','/index.tsx'].map(ext=>base+ext)].find(p=>existsSync(p)&&statSync(p).isFile());
    if(found) dependencies(found,seen);
  }
  return seen;
}
let fullHistory=false;
try {fullHistory=execFileSync('git',['rev-parse','--is-shallow-repository'],{encoding:'utf8',stdio:['ignore','pipe','ignore']}).trim()==='false';} catch {}
const cacheFile='scripts/seo/page-dates.json';
const cache=existsSync(cacheFile)?JSON.parse(readFileSync(cacheFile,'utf8')):{};
const pages=[];
for(const m of source.matchAll(/<Route\s+path="([^"]+)"\s+element=\{<ErrorBoundary><(\w+)/g)) {
  if(m[1].startsWith('/app')||m[1].startsWith('/print')||m[1].includes(':')||!imports.has(m[2])) continue;
  pages.push({url:m[1],file:imports.get(m[2])});
}
const starters=readFileSync('src/pages/ModuleStarter.tsx','utf8');
for(const m of starters.matchAll(/^  ([a-z-]+): \{/gm)) pages.push({url:`/module/${m[1]}`,file:'src/pages/ModuleStarter.tsx'});
const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const entries=[...new Map(pages.map(p=>[p.url,p])).values()].map(p=>{
  const files=[...dependencies(p.file),'src/components/Nav.tsx','src/components/Footer.tsx','src/index.css'];
  const sha256=createHash('sha256').update([...files].sort().map(f=>f+'\0'+readFileSync(f,'utf8')).join('\0')).digest('hex');
  const lastmod=fullHistory?execFileSync('git',['log','-1','--format=%cI','--',...files],{encoding:'utf8'}).trim():cache[p.url]?.sha256===sha256?cache[p.url].lastmod:undefined;
  if(!lastmod||!Number.isFinite(Date.parse(lastmod))) throw Error(`Missing source date: ${p.url}`);
  cache[p.url]={sha256,lastmod};
  return `<url><loc>${escape(host+p.url)}</loc><lastmod>${new Date(lastmod).toISOString()}</lastmod></url>`;
});
writeFileSync('public/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+entries.join('\n')+'\n</urlset>\n');
console.log(`Generated ${entries.length} sitemap URLs from app routes and module records.`);

writeFileSync(cacheFile,JSON.stringify(cache,null,2)+'\n');
