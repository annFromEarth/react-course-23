import React, { useState } from 'react';

import styles from './searchInput.module.css';

export default function SearchInput({
  setSearchTarget,
}: {
  setSearchTarget: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const [inputData, setInputData] = useState<string>('');

  const onSubmitHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setSearchTarget(inputData);
  };

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
          onChange={(e) => setInputData(e.target.value)}
          placeholder={searchLog}
          className={styles.searchInput}
        />
        <button
          onClick={onSubmitHandler}
          type="submit"
          className={styles.searchButton}
        >
          Search
        </button>
      </form>
    </div>
  );
}
