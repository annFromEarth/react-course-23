import { Component, ErrorInfo, ReactNode } from 'react';
import ErrorBoundaryComponent from './ErrorBoundaryComponent';

interface IProps {
  children: ReactNode;
}

interface IState {
  hasError: boolean;
  errorName: string;
  componentStack: string | null | undefined;
}

export default class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
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
