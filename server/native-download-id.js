import { createHmac } from 'node:crypto'

// Keep the wire format stable. Producer and consumer test the same fixed vectors.
export function nativeDownloadId(site, email, resourceId, bucket, key) {
  if (!['languagethreshold.com', 'medicalspanish.app', 'constructionspanish.app'].includes(site) ||
      typeof key !== 'string' || key.length < 32 || !Number.isSafeInteger(bucket) || bucket < 0) return null
  return createHmac('sha256', key).update(`native-download:v1:${site}:${String(email).trim().toLowerCase()}:${resourceId}:${bucket}`).digest('hex')
}

export const PRODUCT_MARKETING_VERSION = 'lt-product-marketing-v1'
export const PRODUCT_MARKETING_COPY = 'Send my free resource and Language Threshold practice and product emails. I can change preferences or unsubscribe at any time.'
export function productMarketingId(site, email, resourceId, bucket, key) {
 if (!['languagethreshold.com','medicalspanish.app','constructionspanish.app'].includes(site) || typeof email !== 'string' || !/^[-a-z0-9]{1,100}$/.test(resourceId || '') || typeof key !== 'string' || key.length < 32 || !Number.isSafeInteger(bucket) || bucket < 0) return null
 return createHmac('sha256',key).update(`product-marketing-download:v1:${PRODUCT_MARKETING_VERSION}:${site}:${email.trim().toLowerCase()}:${resourceId}:${bucket}`).digest('hex')
}
export async function marketingGateState(site) {
 try {
  if (!['languagethreshold.com','medicalspanish.app','constructionspanish.app'].includes(site)) return {enabled:false}
  const r=await fetch('https://myaimarketing.worker-bee.app/api/marketing-gate?site='+site,{redirect:'error',signal:AbortSignal.timeout(3000)})
  if(!r.ok)return {enabled:false}
  const raw=await r.text();if(Buffer.byteLength(raw)>8192)return {enabled:false};const d=JSON.parse(raw)
  return d.site===site && d.policyVersion===PRODUCT_MARKETING_VERSION && d.copy===PRODUCT_MARKETING_COPY && typeof d.enabled==='boolean' ? {enabled:d.enabled} : {enabled:false}
 } catch { return {enabled:false} }
}
