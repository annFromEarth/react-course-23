/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import styles from './footer.module.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        <span className={styles.copyright}>&copy;</span> 2023
      </div>
    );
  }
}
