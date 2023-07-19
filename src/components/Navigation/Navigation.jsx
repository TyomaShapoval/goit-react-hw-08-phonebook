import { useIsLoggedIn } from 'hooks';
import { StyledNavigation, NavigationLink } from './Navigation.styled';

function Navigation() {
  const isLoggedIn = useIsLoggedIn();

  return (
    <StyledNavigation>
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && <NavigationLink to="/contacts">Contacts</NavigationLink>}
    </StyledNavigation>
  );
}

export default Navigation;