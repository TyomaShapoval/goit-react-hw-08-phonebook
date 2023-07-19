import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';
import { useFetchingCurrentUser } from 'hooks';
import { userRefresh } from 'redux/auth/operations';

import Layout from 'components/Layout';
const HomePage = lazy(() => import('pages/Home'));
const RegistrationPage = lazy(() => import('pages/Registration'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));
const PageNotFound = lazy(() => import('pages/NotFound'));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useFetchingCurrentUser();

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute redirectTo="/contacts" restricted>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" restricted>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    )
  );
}

export default App;