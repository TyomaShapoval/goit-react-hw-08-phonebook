import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useIsLoggedIn } from 'hooks';


function PublicRoute({ children, redirectTo = '/', restricted = false }) {
  const isLoggedIn = useIsLoggedIn();
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? (
    <Navigate to={redirectTo} replace={true} />
  ) : (
    children
  );
}

PublicRoute.propTypes = {
  redirectTo: PropTypes.string,
  children: PropTypes.object.isRequired,
  restricted: PropTypes.bool,
};

export default PublicRoute;