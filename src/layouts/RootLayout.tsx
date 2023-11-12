import { Link, Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';

import styles from './rootLayout.module.css';

export default function RootLayout() {
  return (
    <div className={styles.root__layout}>
      <ErrorBoundary>
        <Header />
        <main className={styles.main__wrapper}>
          <Link to="search/1" className={styles.main__link}>
            Explore our planet search!
          </Link>
          <Outlet />
        </main>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}
