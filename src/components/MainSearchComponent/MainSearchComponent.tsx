import React, { ReactNode } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import SearchResult from '../SearchResult/SearchResult';

interface IProps {
  children: ReactNode;
}

interface IState {
  searchTarget: string | null;
}

export default class MainSearchComponent extends React.Component<
  IProps,
  IState
> {
  constructor(props: IProps) {
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
