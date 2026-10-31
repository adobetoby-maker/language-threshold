# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


## HeyCatch blog

`/blog` and `/blog/{slug}` are rendered by `api/blog.ts` on Vercel. Articles
come from HeyCatch at request time; there is no article database or build-time
content snapshot. The API key is only read on the server.

In the **language-threshold** Vercel project's Environment Variables settings,
add `HEYCATCH_API_KEY` as a Secret for Production and Preview. Use the
publishable blog key (`hck_lv_…`), not the analytics SDK key. Redeploy after
adding or replacing the variable. Never commit its value. Local integration
work can supply the variable through the process environment with `vercel dev`.

The server caches successful API responses for 60 seconds, and Vercel caches
responses for 60 seconds. A warm instance can reuse its last successful content
on network failures. Revoked keys clear that cached result; missing keys show
the empty state. Navigation hides Blog until HeyCatch has published articles.
The sitemap dynamically preserves the original URLs in `server/sitemap-base.xml`
and adds every published post. The service worker excludes blog navigation.

`npm run build` checks the client and blog server types. `npm test` verifies
pagination, caching, sanitization, TOC order, metadata, sitemap, empty states,
rate limiting and real 404 responses. After production deployment, verify
`https://languagethreshold.com/blog` and return to HeyCatch to click **I've done it**.
