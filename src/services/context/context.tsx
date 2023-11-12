import { createContext } from 'react';

const SearchTargetContext = createContext(
  localStorage.getItem('searchLog') ? localStorage.getItem('searchLog') : ''
);

export default SearchTargetContext;
