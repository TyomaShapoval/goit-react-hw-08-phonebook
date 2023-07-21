import { useSelector, useDispatch } from 'react-redux';

import { filterContacts } from '../../redux/contacts/contactsSlice';
import { getFilter } from 'redux/contacts/selectors';
import scss from '../LoginForm/LoginForm.module.scss'
export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  function filterName(event) {
    dispatch(filterContacts(event.currentTarget.value));
  }

  return (
    <input className={scss.inputField} type="text" placeholder='find contact' value={filter} onChange={filterName} />
  );
};