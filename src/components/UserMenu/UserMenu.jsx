import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import scss from "./UserMenu.module.scss";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={scss.nfo}>
      <p className={scss.user}>
        Welcome, {user.name}
      </p>

      <button className={scss.LogOut}
        onClick={() => dispatch(logOut())}
      >
        {' '}
        Logout
      </button>
    </div>
  );
};