import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styles from 'styles/index.module.scss';
import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
export const SharedLayout = () => {
  return (
    <section className={styles.Wrapper}>
      <header className={styles.Header}>
        <Header />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <footer className={styles.Footer}>
        <Footer />
      </footer>
    </section>
  );
};
