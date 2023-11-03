import { useState } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import SearchResult from '../SearchResult/SearchResult';

export default function MainSearchComponent() {
  const [searchTarget, setSearchTarget] = useState<string | null>(
    localStorage.getItem('searchLog') ? localStorage.getItem('searchLog') : ''
  );

  return (
    <>
      <SearchInput setSearchTarget={setSearchTarget} />
      <SearchResult searchTarget={searchTarget} />
    </>
  );
}
