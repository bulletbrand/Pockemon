import React, { Component, ReactNode } from 'react';
import ErrorIndicator from 'src/components/ErrorIndicator/ErrorIndicator';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = { hasError: false };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) return <ErrorIndicator />;
    return this.props.children;
  }
}
