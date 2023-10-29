import React from 'react';
import SearchService from '../../services/searchService';
import PlanetInfoDiv from '../PlanetInfoDiv/PlanetInfoDiv';
import { Planet } from '../../services/types';
import Spinner from '../Spinner/Spinner';

import styles from './searchResult.module.css';

interface IProps {
  searchTarget: string | null;
}
interface IState {
  searchResult: Array<Planet> | null;
  searchTarget: string;
}

export default class SearchResult extends React.Component<IProps, IState> {
  currentSearchTarget = localStorage.getItem('searchLog')
    ? JSON.stringify(localStorage.getItem('searchLog'))
    : null;

  constructor(props: IProps) {
    super(props);
    this.state = {
      searchResult: null,
      searchTarget: '',
    };
  }

  static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {
    if (nextProps.searchTarget !== prevState.searchTarget) {
      return {
        searchResult: null,
        searchTarget: nextProps.searchTarget,
      };
    }
    return null;
  }

  componentDidMount() {
    const { searchTarget } = this.props;
    this.loadAsyncData(searchTarget);
  }

  componentDidUpdate() {
    const { searchResult, searchTarget } = this.state;
    if (searchResult === null) {
      this.loadAsyncData(searchTarget);
    }
  }

  componentWillUnmount() {
    this.currentSearchTarget = null;
  }

  private async loadAsyncData(searchTarget: string | null) {
    if (searchTarget)
      localStorage.setItem('searchLog', JSON.stringify(searchTarget));
    if (searchTarget === this.currentSearchTarget) {
      // Data for this id is already loading
    }
    this.currentSearchTarget = searchTarget;
    const data = await SearchService.searchData(searchTarget);
    if (searchTarget === this.currentSearchTarget) {
      this.setState({ searchResult: data.results });
    }
  }

  render() {
    const { searchResult } = this.state;

    return (
      <div className={styles.searchResult__wrapper}>
        {!searchResult && <Spinner />}
        {searchResult &&
          (searchResult.length === 0 ? (
            <>No data matches your request! </>
          ) : (
            searchResult.map((el) => {
              return <PlanetInfoDiv key={el.name} searchResult={el} />;
            })
          ))}
      </div>
    );
  }
}
