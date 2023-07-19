import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

export const useUser = () => useSelector(selectUser);