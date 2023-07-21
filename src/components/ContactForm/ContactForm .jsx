import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';
import { getContacts } from '../../redux/contacts/selectors';
import scss from '../LoginForm/LoginForm.module.scss'
import { toast } from 'react-toastify';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const allContacts = useSelector(getContacts);

  let exist = true

  function handelInputChange(event) {
    if (event.currentTarget.name === 'name') {
      setName(event.currentTarget.value);
    } else if (event.currentTarget.name === 'number') {
      setNumber(event.currentTarget.value);
    } else {
      return;
    }
  }  

  function reset() {
    setName('');
    setNumber('');
    exist = true
  }

  function handleSubmit(event) {
    event.preventDefault();

    allContacts.map((conta) => {
      if(conta.name.includes(name)) {
        toast.warn(`${name} is already exists`);
        exist = false;
      }
      return conta
    })

    if(exist) {
      dispatch(addContacts({ name, number }));
      reset();
    }
  }

  return (
    <section className={scss.container}>
      <form className={scss.form} onSubmit={handleSubmit}>

        <input className={scss.inputField} value={name} onChange={handelInputChange} autoComplete="off" type="text" placeholder='Name*' name="name" pattern="^[a-zA-Zа-яА-Я]+(([' \(\)-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" required />
        
        <input className={scss.inputField} value={number} onChange={handelInputChange} autoComplete="off" type="tel" placeholder='Number*' name="number" min="5" required />

        <label>
          <button className={scss.auth} type="submit">Add contact</button>
        </label>
      </form>
    </section>
  );
}
