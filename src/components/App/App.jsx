import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { getIsFetchingCurrent } from 'redux/auth/auth-selectors';
import { Layout } from 'components/Layout/Layout';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { EditContactModal } from 'components/EditContactModal/EditContactModal';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { Spinner } from 'components/Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser())
  
  }, [dispatch]);
  
  return (
    <>
      {isFetchingCurrentUser ? <Spinner /> : (
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route index element={<HomePage />} />

              <Route
                path="register"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <RegisterPage />
                  </PublicRoute>}>
              </Route>
              
              <Route
                path="login"
                element={
                  <PublicRoute redirectTo="/contacts" restricted>
                    <LoginPage />
                  </PublicRoute>}>
              </Route>
            
              <Route path='contacts/' element={
                <PrivateRoute redirectTo='/login'>
                  <ContactsPage />
                </PrivateRoute>}>
                <Route path=":id" element={<EditContactModal />} />
              </Route>

              <Route path='*' element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
};
