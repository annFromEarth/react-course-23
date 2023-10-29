import React, { ReactNode } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import SearchResult from '../SearchResult/SearchResult';

interface Props {
  children: ReactNode;
}

interface State {
  searchTarget: string | null;
}

export default class MainSearchComponent extends React.Component<Props, State> {
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
      <>
        <SearchInput setSearchTarget={setSearchTarget} />
        <SearchResult searchTarget={searchTarget} />
      </>
    );
  }
}
