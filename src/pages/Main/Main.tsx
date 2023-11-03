import ErrorButton from '../../components/ErrorGenerator/ErrorButton';
import MainSearchComponent from '../../components/MainSearchComponent/MainSearchComponent';

import styles from './main.module.css';

export default function Main() {
  return (
    <main className={styles.main__wrapper}>
      <ErrorButton />
      <MainSearchComponent />
    </main>
  );
}
