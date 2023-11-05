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

  useEffect(() => {
    const loadAsyncData = async (searchTargetArg: string | null) => {
      setSearchResult(null);
      if (searchTargetArg) localStorage.setItem('searchLog', searchTargetArg);
      const data = await SearchService.searchData(searchTargetArg);
      let accumulatedData = data.results;
      let nextURL: RequestInfo | URL | null = data.next;

      while (nextURL !== null) {
        console.log('next going');
        /* eslint-disable no-await-in-loop */
        const dataNext = await SearchService.searchDataFromUrl(nextURL);
        accumulatedData = accumulatedData.concat(dataNext.results);
        nextURL = dataNext.next;
        console.log('accData', accumulatedData);
        console.log(nextURL);
      }

      setSearchResult(accumulatedData);
      console.log('accDataFinal', accumulatedData);
      //   console.log(data);
    };
    loadAsyncData(searchTarget);
  }, [searchTarget]);

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
