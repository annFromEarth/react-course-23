import React from 'react';

import styles from './searchInput.module.css';

interface Props {
  setSearchTarget: (target: string) => void;
}
interface State {
  inputData: string;
}

export default class SearchInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputData: '',
    };
  }

  onSubmitHandler() {
    const { setSearchTarget } = this.props;
    const { inputData } = this.state;
    localStorage.setItem('searchLog', inputData);
    setSearchTarget(inputData);
  }

  render() {
    const searchLog = localStorage.getItem('searchLog')
      ? localStorage.getItem('searchLog')!
      : 'Where would you like to go?';
    return (
      <div className={styles.searchInput__wrapper}>
        <input
          type="text"
          id="searchFor"
          name="searchFor"
          onChange={(e) => this.setState({ inputData: e.target.value })}
          placeholder={searchLog}
          className={styles.searchInput}
        />
        <button
          onClick={this.onSubmitHandler.bind(this)} // bind!!!
          type="submit"
          className={styles.searchButton}
        >
          Search
        </button>
      </div>
    );
  }
}
