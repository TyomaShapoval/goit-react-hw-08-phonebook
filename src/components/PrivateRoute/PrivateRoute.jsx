import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useIsLoggedIn } from 'hooks';


function PrivateRoute({ children, redirectTo = '/' }) {
  const isLoggedIn =  useIsLoggedIn();

  return isLoggedIn ? children : <Navigate to={redirectTo} replace={true} />;
}

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default PrivateRoute;