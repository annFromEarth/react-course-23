import React from 'react';
import SearchService from '../../services/searchService';
import PlanetInfoDiv from '../PlanetInfoDiv/PlanetInfoDiv';

import styles from './searchResult.module.css';
import { Planet } from '../../services/types';

interface Props {
  searchTarget: string;
}
interface State {
  searchResult: Array<Planet> | null;
}

export default class SearchResult extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchResult: null,
    };
  }

  async componentDidMount(): Promise<void> {
    const data = await SearchService.getData();
    this.setState({ searchResult: data.results });
  }

  render() {
    const { searchTarget } = this.props;
    const { searchResult } = this.state;
    return (
      <div className={styles.searchResult__wrapper}>
        <div className={styles.searchResult__content}>{searchTarget}</div>
        {searchResult &&
          searchResult.map((el) => {
            return <PlanetInfoDiv key={el.name} searchResult={el} />;
          })}
      </div>
    );
  }
}
