import { useEffect, useState } from 'react';
import SearchService from '../../services/searchService';
import PlanetInfoDiv from '../PlanetInfoDiv/PlanetInfoDiv';
import { Planet } from '../../services/types';
import Spinner from '../Spinner/Spinner';

import styles from './searchResult.module.css';

export default function SearchResult({
  searchTarget,
}: {
  searchTarget: string | null;
}) {
  const [searchResult, setSearchResult] = useState<Array<Planet> | null>(null);
  const [searchTargetLocal, setSearchTargetLocal] = useState<string | null>(
    localStorage.getItem('searchLog') ? localStorage.getItem('searchLog') : ''
  );

  useEffect(() => {
    if (searchTarget) setSearchTargetLocal(searchTarget);
    const loadAsyncData = async (searchTargetArg: string | null) => {
      if (searchTargetArg) localStorage.setItem('searchLog', searchTargetArg);
      const data = await SearchService.searchData(searchTargetArg);
      setSearchResult(data.results);
    };
    loadAsyncData(searchTargetLocal);
  }, [searchTarget, searchTargetLocal]);

  return (
    <div className={styles.searchResult__wrapper}>
      {!searchResult && <Spinner />}
      {searchResult &&
        (searchResult.length === 0
          ? 'No data matches your request!'
          : searchResult.map((el) => {
              return <PlanetInfoDiv key={el.name} searchResult={el} />;
            }))}
    </div>
  );
}
