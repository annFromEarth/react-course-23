import React from 'react';

import styles from './errorButton.module.css';

export default class ErrorButton extends React.Component<
  Record<string, never>,
  { generateError: boolean }
> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { generateError: false };
  }

  generateError() {
    this.setState({ generateError: true });
  }

  render() {
    const { generateError } = this.state;
    if (generateError) {
      throw new Error();
    }
    return (
      <button
        onClick={this.generateError.bind(this)}
        type="submit"
        className={styles.errorButton}
      >
        Generate Error
      </button>
    );
  }
}
