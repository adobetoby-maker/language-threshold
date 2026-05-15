import { Component } from 'react'
import type { ReactNode, ErrorInfo } from 'react'
import { displayFont, sansFont } from '../constants'

interface Props { children: ReactNode }
interface State { error: Error | null }

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary]', error, info.componentStack)
  }

  render() {
    if (this.state.error) {
      return (
        <div
          className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
          style={{ backgroundColor: '#0D0D0D' }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
            style={{ backgroundColor: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)' }}
          >
            <span style={{ fontSize: 28 }}>⚠</span>
          </div>
          <h1 className="text-2xl font-bold mb-2" style={{ ...displayFont, color: '#F7F3EC' }}>
            Something went wrong
          </h1>
          <p className="text-sm mb-8 max-w-sm" style={{ ...sansFont, color: '#A89F94' }}>
            An unexpected error occurred. Reload the page to try again.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ ...sansFont, backgroundColor: '#C9A84C', color: '#0D0D0D' }}
            >
              Reload
            </button>
            <button
              onClick={() => { this.setState({ error: null }); window.location.href = '/' }}
              className="px-6 py-2.5 rounded-full font-semibold text-sm transition-opacity hover:opacity-80"
              style={{ ...sansFont, border: '1px solid rgba(201,168,76,0.35)', color: '#F7F3EC', backgroundColor: 'transparent' }}
            >
              Go home
            </button>
          </div>
          {import.meta.env.DEV && (
            <pre className="mt-8 text-left text-xs max-w-lg overflow-auto p-4 rounded-xl" style={{ backgroundColor: '#161616', color: '#EF4444' }}>
              {this.state.error.stack}
            </pre>
          )}
        </div>
      )
    }
    return this.props.children
  }
}
