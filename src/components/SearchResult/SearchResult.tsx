import React from 'react';

import styles from './searchResult.module.css';

interface Props {
  searchTarget: string;
}

export default class SearchResult extends React.Component<Props> {
  render() {
    const { searchTarget } = this.props;
    return (
      <div className={styles.searchResult__wrapper}>
        <div className={styles.searchResult__content}>{searchTarget}</div>
      </div>
    );
  }
}
