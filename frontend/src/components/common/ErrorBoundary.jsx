import { Component } from 'react'

class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center">
          <h1 className="text-projector-md font-bold text-danger">Something went wrong</h1>
          <p className="text-projector-sm text-ink">Please refresh the page to continue.</p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
