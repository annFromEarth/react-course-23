import { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import SearchService from '../../services/searchService/searchService';
import PlanetMainInfo from '../PlanetMainInfo/PlanetMainInfo';
import { Planet } from '../../services/searchService/types';
import Spinner from '../Spinner/Spinner';
import Pagination from '../Pagination/Pagination';
import SearchTargetContext from '../../services/context/context';

import styles from './searchResult.module.css';
import ItemsPerPageForm from '../ItemsPerPageForm/ItemsPerPageForm';

export default function SearchResult() {
  const searchTarget = useContext(SearchTargetContext);

  const [searchResult, setSearchResult] = useState<Array<Planet> | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(
    localStorage.getItem('ItemsPerPage')
      ? Number(localStorage.getItem('ItemsPerPage'))
      : 5
  );

  const IndexOfLastItem = currentPage * itemsPerPage;
  const IndexOfFirstItem = IndexOfLastItem - itemsPerPage;
  const currentItems = searchResult?.slice(IndexOfFirstItem, IndexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    const loadAsyncData = async (searchTargetArg: string | null) => {
      setSearchResult(null);
      if (searchTargetArg) localStorage.setItem('searchLog', searchTargetArg);
      const data = await SearchService.searchData(searchTargetArg);
      let accumulatedData = data.results;
      let nextURL: RequestInfo | URL | null = data.next;

      while (nextURL !== null) {
        // console.log('next going');
        /* eslint-disable no-await-in-loop */
        const dataNext = await SearchService.searchDataFromUrl(nextURL);
        accumulatedData = accumulatedData.concat(dataNext.results);
        nextURL = dataNext.next;
        // console.log('accData', accumulatedData);
        // console.log(nextURL);
      }

      setSearchResult(accumulatedData);
      //   console.log('accDataFinal', accumulatedData);
    };
    loadAsyncData(searchTarget);
  }, [searchTarget, itemsPerPage]);

  return (
    <div className={styles.searchResult__wrapper}>
      {!searchResult && <Spinner />}
      {searchResult &&
        currentItems &&
        (searchResult.length === 0 ? (
          'No data matches your request!'
        ) : (
          <div className={styles.searchResult__list__wrapper}>
            {currentItems.map((el) => {
              return <PlanetMainInfo key={el.name} searchResult={el} />;
            })}
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={searchResult.length}
              paginate={paginate}
            />
            <ItemsPerPageForm
              itemsPerPage={itemsPerPage}
              setItemsPerPage={setItemsPerPage}
            />
          </div>
        ))}
      <Outlet />
    </div>
  );
}
