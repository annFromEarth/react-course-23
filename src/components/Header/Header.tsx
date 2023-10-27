/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import styles from './header.module.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        star wars
        <br />
        <span className={styles.select}>planet</span> searcher
      </div>
    );
  }
}
