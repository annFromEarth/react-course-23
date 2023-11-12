import { useState } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import SearchResult from '../SearchResult/SearchResult';

export default function MainSearchComponent() {
  const [searchTarget, setSearchTarget] = useState<string | null>(
    localStorage.getItem('searchLog') ?? ''
  );

  return (
    <>
      <SearchInput
        searchTarget={searchTarget}
        setSearchTarget={setSearchTarget}
      />
      <SearchResult />
    </>
  );
}
