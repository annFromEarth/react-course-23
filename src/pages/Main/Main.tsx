import React from 'react';
import ErrorButton from '../../components/ErrorGenerator/ErrorButton';
import MainSearchComponent from '../../components/MainSearchComponent/MainSearchComponent';

import styles from './main.module.css';

export default class Main extends React.Component {
  render() {
    return (
      <main className={styles.main__wrapper}>
        <ErrorButton />
        <MainSearchComponent>{}</MainSearchComponent>
      </main>
    );
  }
}
