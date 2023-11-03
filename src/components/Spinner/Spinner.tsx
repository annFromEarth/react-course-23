import { Component } from 'react';

import styles from './spinner.module.css';

export default class Spinner extends Component {
  render() {
    return (
      <div className={styles.spinner__container}>
        <span className={styles.spinner} />
        <div className={styles.spinner__text}>Loading...</div>
      </div>
    );
  }
}
