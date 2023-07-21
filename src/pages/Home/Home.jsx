import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import phonebook from '../../images/addressbook.jpg';
import scss from "./Home.module.scss";

function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <section className={scss.container}>
      {isLoggedIn ? (
        <p className={scss.homeText}>Save your contacts with pleasure!</p>
      ) : (
        <p className={scss.homeText}>To get started, please log in!</p>
      )}
      <img className={scss.book} src={phonebook} alt="phonebook"/>
    </section>
  );
}

export default Home;