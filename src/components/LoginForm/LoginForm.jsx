import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import scss from "./LoginForm.module.scss"

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <section className={scss.container}>
      <form className={scss.form} onSubmit={handleSubmit} autoComplete="off">
        <input className={scss.inputField} type="email" name="email" placeholder='Email' pattern='/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/' required />

        <input className={scss.inputField} type="password" placeholder='Password' name="password" minLength="8" required />

        <button className={scss.auth} type="submit">Login</button>
      </form>
    </section>
  );
};
