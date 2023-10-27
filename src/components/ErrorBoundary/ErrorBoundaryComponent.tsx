/* eslint-disable react/prefer-stateless-function */
import { Component } from 'react';

type Props = {
  errorName: string;
  componentStack: string | null | undefined;
};

export default class ErrorBoundaryComponent extends Component<Props> {
  render() {
    const { errorName, componentStack } = this.props;
    return (
      <>
        <div>Error Has Occurred!</div>
        <div>{errorName}</div>
        <div>{componentStack}</div>
      </>
    );
  }
}
