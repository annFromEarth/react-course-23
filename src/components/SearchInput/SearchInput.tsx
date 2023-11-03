import React from 'react';

import styles from './searchInput.module.css';

interface IProps {
  setSearchTarget: (target: string) => void;
}
interface IState {
  inputData: string;
}

export default class SearchInput extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      inputData: '',
    };
  }

  onSubmitHandler() {
    const { setSearchTarget } = this.props;
    const { inputData } = this.state;
    setSearchTarget(inputData);
  }

  render() {
    const searchLog = localStorage.getItem('searchLog')
      ? localStorage.getItem('searchLog')!
      : 'Where should we to go?';
    return (
      <div className={styles.searchInput__wrapper}>
        <form>
          <input
            type="search"
            id="searchFor"
            name="searchFor"
            onChange={(e) => this.setState({ inputData: e.target.value })}
            placeholder={searchLog}
            className={styles.searchInput}
          />
          <button
            onClick={this.onSubmitHandler.bind(this)}
            type="submit"
            className={styles.searchButton}
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}
