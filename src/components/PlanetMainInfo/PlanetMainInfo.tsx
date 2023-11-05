import { NavLink } from 'react-router-dom';
import { Planet } from '../../services/searchService/types';
import styles from './planetMainInfo.module.css';

export default function PlanetMainInfo({
  searchResult,
}: {
  searchResult: Planet;
}) {
  const { name, climate, terrain, population } = searchResult;

  return (
    <div className={styles.planetInfoDiv__wrapper}>
      <NavLink to={name} className={styles.planetInfoDiv__name}>
        {' '}
        {name}
      </NavLink>
      <div className={styles.planetInfoDiv_InfoContent}>
        is a planet with
        <span className={styles.planetInfoDiv_InfoHeader}> {climate}</span>{' '}
        climate, the terrain of
        <span className={styles.planetInfoDiv_InfoHeader}> {terrain}</span> and
        <span className={styles.planetInfoDiv_InfoHeader}>
          {' '}
          {population}
        </span>{' '}
        population.
      </div>
    </div>
  );
}
