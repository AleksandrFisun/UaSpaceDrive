import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
