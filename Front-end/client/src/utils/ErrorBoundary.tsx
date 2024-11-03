// ErrorBoundary.tsx
import React, { Component, ReactNode } from "react";
import { useRouter } from "next/router";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("Error caught by Error Boundary: ", error);
  }

  render() {
    if (this.state.hasError) {
      return <Custom404 />;
    }
    return this.props.children;
  }
}

// Custom404.tsx
export default function Custom404() {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-3xl font-bold text-red-500">404 - Page Not Found</h1>
    </div>
  );
}

export default ErrorBoundary;
