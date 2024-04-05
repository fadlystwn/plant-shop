'use-client';
import React, { useState, useEffect } from 'react';

const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorListener = (event: ErrorEvent) => {
      setHasError(true);
    };

    window.addEventListener('error', errorListener);

    return () => {
      window.removeEventListener('error', errorListener);
    };
  }, []);

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return <>{children}</>;
};

export default ErrorBoundary;