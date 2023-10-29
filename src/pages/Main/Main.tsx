import React, { ReactNode } from 'react';
import SearchInput from '../../components/SearchInput/SearchInput';
import SearchResult from '../../components/SearchResult/SearchResult';

import styles from './main.module.css';
import ErrorButton from '../../components/ErrorGenerator/ErrorButton';

interface Props {
  children: ReactNode;
}

interface State {
  searchTarget: string | null;
}

export default class Main extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchTarget: localStorage.getItem('searchLog')
        ? localStorage.getItem('searchLog')
        : '',
    };
  }

  render() {
    const { searchTarget } = this.state;
    const setSearchTarget = (target: string) =>
      this.setState({ searchTarget: target });

    return (
      <main className={styles.main__wrapper}>
        <SearchInput setSearchTarget={setSearchTarget} />
        <ErrorButton />
        <SearchResult searchTarget={searchTarget} />
      </main>
    );
  }
}
