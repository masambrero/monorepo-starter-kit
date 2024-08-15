'use client';

import { Component, ErrorInfo } from 'react';

import classes from './ErrorBoundary.module.css';

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type State = {
  error: Error | null;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  state: State = { error: null };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // TODO: Send error info to Sentry
    console.error('Uncaught error:', error, errorInfo);
  }

  // eslint-disable-next-line react/no-unused-class-component-methods
  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const {
      state: { error },
      props,
    } = this;

    if (error) {
      return (
        <div className={classes.wrapper}>
          <h2>Произошла ошибка при рендере</h2>
          {error.message ? <p>{error.message}</p> : null}
        </div>
      );
    }

    return props.children;
  }
}
