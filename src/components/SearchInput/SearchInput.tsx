import React, { useState } from 'react';

import styles from './searchInput.module.css';

export default function SearchInput({
  searchTarget,
  setSearchTarget,
}: {
  searchTarget: string | null;
  setSearchTarget: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const [inputData, setInputData] = useState<string>('');

  const onSubmitHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (searchTarget) localStorage.setItem('SearchTargetCurrent', searchTarget);
    setSearchTarget(inputData);
  };

  const searchLog = localStorage.getItem('searchLog')
    ? localStorage.getItem('searchLog')!
    : 'Where should we to go?';

  return (
    <div className={styles.searchInput__wrapper}>
      <form id="search-form" role="search">
        <input
          type="search"
          id="q"
          name="q"
          onChange={(e) => setInputData(e.target.value)}
          placeholder={searchLog}
          className={styles.searchInput}
        />
      </form>
      <form method="post">
        <button
          onClick={onSubmitHandler}
          type="submit"
          className={styles.searchButton}
        >
          {' '}
          Search{' '}
        </button>
      </form>
    </div>
  );
}
