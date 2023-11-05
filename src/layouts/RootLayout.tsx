import { Link, Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

import styles from './rootLayout.module.css';

export default function RootLayout() {
  return (
    <div className={styles.root__layout}>
      <Header />
      <main className={styles.main__wrapper}>
        <Link to="search/1" className={styles.main__link}>
          Explore our planet search!
        </Link>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
