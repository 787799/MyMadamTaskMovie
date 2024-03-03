"use client"
import React, { useState } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  const handleComponentError = (error, errorInfo) => {
    // You can log the error to an error reporting service here
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    // Update state to indicate an error has occurred
    setHasError(true);
  };

  if (hasError) {
    // You can render a fallback UI here
    return <h1>Something went wrong.</h1>;
  }

  return (
    <React.ErrorBoundary
      onReset={() => setHasError(false)}
      FallbackComponent={({ resetErrorBoundary }) => (
        <div>
          <h1>Something went wrong.</h1>
          <button onClick={resetErrorBoundary}>Try again</button>
        </div>
      )}
    >
      {children}
    </React.ErrorBoundary>
  );
}

export default ErrorBoundary;
