import pageNotFound from '../../images/404.jpg';
import { Container, HomeLink, Image, Main, ErrorMessage } from './NotFound.styled';

function NotFoundPage() {
  return (
    <Main>
      <Container>
        <HomeLink to="/">Go Home</HomeLink>
        <ErrorMessage>The exact URL you were looking for does not exist</ErrorMessage>
        <Image src={pageNotFound} alt="404 page not found" />
      </Container>
    </Main>
  );
}

export default NotFoundPage;