import { NavLink } from 'react-router-dom';

import styles from './pagination.module.css';

export default function Pagination({
  itemsPerPage,
  totalItems,
  paginate,
}: {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <ul className={styles.pagination__wrapper}>
      {pageNumbers.map((pageNumber) => (
        <li key={pageNumber} className="pageItem">
          <NavLink
            onClick={() => paginate(pageNumber)}
            to={`../search/${pageNumber}`}
            className={styles.pagination__pageNumber}
          >
            {pageNumber}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
