import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectisUpdate } from '../redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isUpdate = useSelector(selectisUpdate);
  return !isLoggedIn && !isUpdate ? <Navigate to={redirectTo} /> : Component;
};