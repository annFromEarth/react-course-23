import {
  useLoaderData,
  useNavigate,
  useNavigation,
  useParams,
} from 'react-router-dom';
import { Planet } from '../../services/searchService/types';
import Spinner from '../Spinner/Spinner';

import styles from './planetDetails.module.css';

export default function PlanetDetails() {
  const { planetName } = useParams();
  const planetDetails = useLoaderData() as Planet;
  const navigation = useNavigation();

  const navigate = useNavigate();

  const {
    diameter,
    gravity,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    orbital_period,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    rotation_period,
    climate,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    surface_water,
    terrain,
    population,
  } = planetDetails;

  return (
    <div className={styles.planetDetail__wrapper}>
      {navigation.state === 'loading' ? (
        <Spinner />
      ) : (
        <>
          <div className={styles.planetInfoDiv__wrapper}>
            <div className={styles.planetInfoDiv__name}> {planetName}</div>
            <div className={styles.planetInfoDiv_InfoContent}>
              <span className={styles.planetInfoDiv_InfoHeader}>Diameter:</span>
              {diameter}
            </div>
            <div className={styles.planetInfoDiv_InfoContent}>
              <span className={styles.planetInfoDiv_InfoHeader}>Gravity:</span>
              {gravity}
            </div>
            <div className={styles.planetInfoDiv_InfoContent}>
              <span className={styles.planetInfoDiv_InfoHeader}>
                Orbital period:
              </span>
              {orbital_period}
            </div>
            <div className={styles.planetInfoDiv_InfoContent}>
              <span className={styles.planetInfoDiv_InfoHeader}>
                Rotation Period:
              </span>
              {rotation_period}
            </div>
            <div className={styles.planetInfoDiv_InfoContent}>
              <span className={styles.planetInfoDiv_InfoHeader}>Climate:</span>
              {climate}
            </div>
            <div className={styles.planetInfoDiv_InfoContent}>
              <span className={styles.planetInfoDiv_InfoHeader}>
                Surface water:
              </span>
              {surface_water}
            </div>
            <div className={styles.planetInfoDiv_InfoContent}>
              <span className={styles.planetInfoDiv_InfoHeader}>Terrain:</span>
              {terrain}
            </div>
            <div className={styles.planetInfoDiv_InfoContent}>
              <span className={styles.planetInfoDiv_InfoHeader}>
                Population:
              </span>
              {population}
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              navigate('../');
            }}
            className={styles.closeButton}
          >
            close
          </button>
        </>
      )}
    </div>
  );
}
