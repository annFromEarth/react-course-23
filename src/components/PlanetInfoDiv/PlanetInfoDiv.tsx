import styles from './planetInfoDiv.module.css';
import { Planet } from '../../services/types';

export default function PlanetInfoDiv({
  searchResult,
}: {
  searchResult: Planet;
}) {
  const {
    name,
    diameter,
    gravity,
    orbitalPeriod,
    rotationPeriod,
    climate,
    surfaceWater,
    terrain,
    population,
  } = searchResult;

  return (
    <div className={styles.planetInfoDiv__wrapper}>
      <div className={styles.planetInfoDiv__name}> {name}</div>
      <div className={styles.planetInfoDiv_InfoContent}>
        <span className={styles.planetInfoDiv_InfoHeader}>Diameter:</span>{' '}
        {diameter}
      </div>
      <div className={styles.planetInfoDiv_InfoContent}>
        <span className={styles.planetInfoDiv_InfoHeader}>Gravity:</span>{' '}
        {gravity}
      </div>
      <div className={styles.planetInfoDiv_InfoContent}>
        <span className={styles.planetInfoDiv_InfoHeader}>Orbital period:</span>{' '}
        {orbitalPeriod}
      </div>
      <div className={styles.planetInfoDiv_InfoContent}>
        <span className={styles.planetInfoDiv_InfoHeader}>
          Rotation Period:
        </span>{' '}
        {rotationPeriod}
      </div>
      <div className={styles.planetInfoDiv_InfoContent}>
        <span className={styles.planetInfoDiv_InfoHeader}>Climate:</span>{' '}
        {climate}
      </div>
      <div className={styles.planetInfoDiv_InfoContent}>
        <span className={styles.planetInfoDiv_InfoHeader}>Surface water:</span>{' '}
        {surfaceWater}
      </div>
      <div className={styles.planetInfoDiv_InfoContent}>
        <span className={styles.planetInfoDiv_InfoHeader}>Terrain</span>:{' '}
        {terrain}
      </div>
      <div className={styles.planetInfoDiv_InfoContent}>
        <span className={styles.planetInfoDiv_InfoHeader}>Population:</span>{' '}
        {population}
      </div>
    </div>
  );
}
