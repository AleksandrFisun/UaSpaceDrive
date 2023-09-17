import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

import { useAuth } from 'hooks';
// import RestrictedRout from 'components/Route/RestrictedRout';
// import PrivateRoute from 'components/Route/PrivateRoute';
import { refreshUser } from 'redux/auth/authOperations';

const HomePage = lazy(() => import('pages/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/catalog" element={<CatalogPage />} />

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </>
      )}
    </>
  );
};
