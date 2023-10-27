/* eslint-disable react/prefer-stateless-function */
import { Component, ErrorInfo, ReactNode } from 'react';
import ErrorBoundaryComponent from './ErrorBoundaryComponent';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorName: string;
  componentStack: string | null | undefined;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, errorName: '', componentStack: '' };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      hasError: true,
      errorName: error.toString(),
      componentStack: errorInfo.componentStack,
    });
  }

  render() {
    const { errorName, componentStack, hasError } = this.state;
    const { children } = this.props;
    return hasError ? (
      <ErrorBoundaryComponent
        errorName={errorName}
        componentStack={componentStack}
      />
    ) : (
      children
    );
  }
}
