import { createHmac } from 'node:crypto'

// Keep the wire format stable. Producer and consumer test the same fixed vectors.
export function nativeDownloadId(site, email, resourceId, bucket, key) {
  if (!['languagethreshold.com', 'medicalspanish.app', 'constructionspanish.app'].includes(site) ||
      typeof key !== 'string' || key.length < 32 || !Number.isSafeInteger(bucket) || bucket < 0) return null
  return createHmac('sha256', key).update(`native-download:v1:${site}:${String(email).trim().toLowerCase()}:${resourceId}:${bucket}`).digest('hex')
}
