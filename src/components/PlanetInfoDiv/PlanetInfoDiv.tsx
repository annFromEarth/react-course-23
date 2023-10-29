import React from 'react';

import styles from './planetInfoDiv.module.css';
import { Planet } from '../../services/types';

interface IProps {
  searchResult: Planet;
}

export default class PlanetInfoDiv extends React.Component<IProps> {
  render() {
    const { searchResult } = this.props;

    return (
      <div className={styles.planetInfoDiv__wrapper}>
        <div className={styles.planetInfoDiv__name}> {searchResult.name}</div>
        <div className={styles.planetInfoDiv_InfoContent}>
          <span className={styles.planetInfoDiv_InfoHeader}>Diameter:</span>{' '}
          {searchResult.diameter}
        </div>
        <div className={styles.planetInfoDiv_InfoContent}>
          <span className={styles.planetInfoDiv_InfoHeader}>Gravity:</span>{' '}
          {searchResult.gravity}
        </div>
        <div className={styles.planetInfoDiv_InfoContent}>
          <span className={styles.planetInfoDiv_InfoHeader}>
            Orbital period:
          </span>{' '}
          {searchResult.orbital_period}
        </div>
        <div className={styles.planetInfoDiv_InfoContent}>
          <span className={styles.planetInfoDiv_InfoHeader}>
            Rotation Period:
          </span>{' '}
          {searchResult.rotation_period}
        </div>
        <div className={styles.planetInfoDiv_InfoContent}>
          <span className={styles.planetInfoDiv_InfoHeader}>Climate:</span>{' '}
          {searchResult.climate}
        </div>
        <div className={styles.planetInfoDiv_InfoContent}>
          <span className={styles.planetInfoDiv_InfoHeader}>
            Surface water:
          </span>{' '}
          {searchResult.surface_water}
        </div>
        <div className={styles.planetInfoDiv_InfoContent}>
          <span className={styles.planetInfoDiv_InfoHeader}>Terrain</span>:{' '}
          {searchResult.terrain}
        </div>
        <div className={styles.planetInfoDiv_InfoContent}>
          <span className={styles.planetInfoDiv_InfoHeader}>Population:</span>{' '}
          {searchResult.population}
        </div>
        <div className={styles.planetInfoDiv_InfoContent}>
          <span className={styles.planetInfoDiv_InfoHeader}>Residents:</span>{' '}
          {searchResult.residents.map((el) => {
            return (
              <div className={styles.planetInfoDiv_listing} key={el}>
                {el}
              </div>
            );
          })}
        </div>
        <div className={styles.planetInfoDiv_InfoContent}>
          <span className={styles.planetInfoDiv_InfoHeader}>Films:</span>{' '}
          {searchResult.films.map((el) => {
            return (
              <div className={styles.planetInfoDiv_listing} key={el}>
                {el}
              </div>
            );
          })}
        </div>
        <div className={styles.planetInfoDiv_InfoContent}>
          <span className={styles.planetInfoDiv_InfoHeader}>Created:</span>{' '}
          {searchResult.created}
        </div>
        <div className={styles.planetInfoDiv_InfoContent}>
          <span className={styles.planetInfoDiv_InfoHeader}>Edited:</span>{' '}
          {searchResult.edited}
        </div>
      </div>
    );
  }
}
