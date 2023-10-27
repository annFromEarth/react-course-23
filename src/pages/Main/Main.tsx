import React, { ReactNode } from 'react';
import SearchInput from '../../components/SearchInput/SearchInput';
import SearchResult from '../../components/SearchResult/SearchResult';

import styles from './main.module.css';

interface Props {
  children: ReactNode;
}

interface State {
  searchTarget: string;
}

export default class Main extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchTarget: '',
    };
  }

  render() {
    const { searchTarget } = this.state;
    const setSearchTarget = (target: string) =>
      this.setState({ searchTarget: target });

    return (
      <div className={styles.main__wrapper}>
        <SearchInput setSearchTarget={setSearchTarget} />
        <SearchResult searchTarget={searchTarget} />
      </div>
    );
  }
}
