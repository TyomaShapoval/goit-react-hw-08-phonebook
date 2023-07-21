import React from 'react';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import {
  getLoading,
  getError,
  selectVisibleContacts,
} from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';

import scss from './ContactsList.module.scss'

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h2 className={scss.title}>My contacts</h2>
        {isLoading && !error && <b>Request in progress...</b>}
        <ul>
          {contacts.length > 0
            ? contacts.map(contact => (
                <li className={scss.list} key={contact.id}>
                  <p className={scss.nameText}>
                    {contact.name}: {contact.number}
                  </p>
                  <button className={scss.btn} onClick={() => dispatch(deleteContacts(contact.id))}>
                    delete
                  </button>
                </li>
              ))
            : 'No contact here yet'}
        </ul>
      </div>
  );
};
