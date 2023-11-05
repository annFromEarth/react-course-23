import ErrorButton from '../../components/ErrorGenerator/ErrorButton';
import MainSearchComponent from '../../components/MainSearchComponent/MainSearchComponent';

import styles from './home.module.css';

export default function Home() {
  return (
    <main className={styles.main__wrapper}>
      <ErrorButton />
      <MainSearchComponent />
    </main>
  );
}
