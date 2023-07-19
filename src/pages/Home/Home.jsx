import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import phonebook from '../../images/addressbook.jpg';
import { Container, WelcomeMessage, Image } from './Home.styled';

function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Container>
      {isLoggedIn ? (
        <WelcomeMessage>Save your contacts with pleasure!</WelcomeMessage>
      ) : (
        <WelcomeMessage>To get started, please log in!</WelcomeMessage>
      )}
      <Image src={phonebook} alt="phonebook"/>
    </Container>
  );
}

export default Home;