import { Component } from 'react';

import styles from './errorBoundaryComponent.module.css';

type Props = {
  errorName: string;
  componentStack: string | null | undefined;
};

export default class ErrorBoundaryComponent extends Component<Props> {
  render() {
    const { errorName, componentStack } = this.props;
    console.error('errorName:', errorName);
    console.error('componentStack:', componentStack);
    return (
      <div className={styles.errorBoundary__wrapper}>
        <div className={styles.errorBoundary__header}>
          Error Has Occurred!
          <br />
          Please reload to continue
        </div>
        <div>Error Name: {errorName}</div>
        <div>Component Stack: {componentStack}</div>
      </div>
    );
  }
}
