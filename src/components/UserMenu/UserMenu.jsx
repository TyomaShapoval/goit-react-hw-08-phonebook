import { useDispatch } from 'react-redux';
import { userSignOut } from 'redux/auth/operations';
import { useIsLoggedIn, useUser } from 'hooks';
import { UserName, LogOutButton, UserMenuWrapper } from './UserMenu.styled';

function UserMenu() {
  const isLoggedIn = useIsLoggedIn();
  const user = useUser();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userSignOut());
  };
  return (
    <>
      {isLoggedIn && (
        <UserMenuWrapper>  
          <UserName>{user.name}</UserName>
          <LogOutButton type="button" onClick={handleLogout}>
            Log out
          </LogOutButton>
        </UserMenuWrapper>
      )}
    </>
  );
}

export default UserMenu;