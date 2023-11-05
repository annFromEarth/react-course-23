import { useState } from 'react';
import ErrorButton from '../../components/ErrorGenerator/ErrorButton';
import SearchInput from '../../components/SearchInput/SearchInput';
import SearchTargetContext from '../../services/context/context';
import SearchResult from '../../components/SearchResult/SearchResult';

import styles from './home.module.css';

export default function Home() {
  const [searchTarget, setSearchTarget] = useState<string | null>(
    localStorage.getItem('searchLog') ? localStorage.getItem('searchLog') : ''
  );
  return (
    <main className={styles.main__wrapper}>
      <SearchTargetContext.Provider value={searchTarget}>
        <ErrorButton />
        <SearchInput setSearchTarget={setSearchTarget} />
        <SearchResult />
      </SearchTargetContext.Provider>
    </main>
  );
}
