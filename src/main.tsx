import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ErrorBoundary from './components/ErrorBoundary.tsx'
import { analytics } from '@heycatch/sdk'

// Keep the landing label from HeyCatch's install guide; SDK 0.8.3's
// published config types do not expose this field yet.
const heyCatchConfig = {
  projectKey: 'hck_pk_AdWii_SQRPrQGJYtK5SsfFMdaepUiyaM',
  site: 'landing',
  install: {
    framework: 'vite-react' as const,
    frameworkVersion: '8',
    agent: 'codex' as const,
  },
}
analytics.init(heyCatchConfig)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
)
