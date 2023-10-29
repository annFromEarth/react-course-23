import React from 'react';
import SearchService from '../../services/searchService';
import PlanetInfoDiv from '../PlanetInfoDiv/PlanetInfoDiv';
import { Planet } from '../../services/types';
import Spinner from '../Spinner/Spinner';

import styles from './searchResult.module.css';

interface Props {
  searchTarget: string | null;
}
interface State {
  searchResult: Array<Planet> | null;
  searchTarget: string;
}

export default class SearchResult extends React.Component<Props, State> {
  currentSearchTarget = localStorage.getItem('searchLog')
    ? localStorage.getItem('searchLog')
    : null;

  constructor(props: Props) {
    super(props);
    this.state = {
      searchResult: null,
      searchTarget: '',
      //   searchTarget: localStorage.getItem('searchLog')
      //     ? localStorage.getItem('searchLog')
      //     : '',
    };
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
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
    // console.log('loading');
    // console.log('currentST', this.currentSearchTarget);
    // console.log('ST', searchTarget);

    // console.log('settingLS');
    if (searchTarget && searchTarget !== '')
      localStorage.setItem('searchLog', searchTarget);

    if (searchTarget === this.currentSearchTarget) {
      // Data for this id is already loading
    }

    this.currentSearchTarget = searchTarget;
    const data = await SearchService.searchData(searchTarget);
    // console.log(data);
    if (searchTarget === this.currentSearchTarget) {
      this.setState({ searchResult: data.results });
    }
  }

  render() {
    // const { searchTarget } = this.props;
    const { searchResult } = this.state;
    return (
      <div className={styles.searchResult__wrapper}>
        {/* <div className={styles.searchResult__content}>{searchTarget}</div> */}
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
