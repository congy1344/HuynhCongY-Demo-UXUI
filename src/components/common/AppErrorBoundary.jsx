/** Functional wrapper providing a friendly route-level error boundary. */
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback() {
  return <div className="page-wrapper empty-state" role="alert"><h1>Something went wrong.</h1><p>Please refresh the page and try again.</p></div>;
}

export default function AppErrorBoundary({ children }) {
  return <ErrorBoundary fallback={<ErrorFallback />}>{children}</ErrorBoundary>;
}
