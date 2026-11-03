// The build bundles the current sanitizer and its ESM parser into one CommonJS
// module so Vercel's function require hook can load it on Node 24.
import sanitizeHtml = require('sanitize-html')
export = sanitizeHtml
