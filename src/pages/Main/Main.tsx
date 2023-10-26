/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import styles from './main.module.css';

export default class Main extends React.Component {
  render() {
    return (
      <div className={styles.main__wrapper}>
        <div className={styles.searchInput__wrapper}>Search</div>
        <div className={styles.searchResult__wrapper}>Result</div>
      </div>
    );
  }
}
