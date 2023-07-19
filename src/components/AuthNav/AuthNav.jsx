import { SignInLink, RegisterLinkWrapper, RegisterLinkMessage, RegisterLink } from './AuthNav.styled';

function AuthNav() {
  return (
    <ul>
      <SignInLink to="/login">Log in</SignInLink>
      <RegisterLinkWrapper>
      <RegisterLinkMessage>New user?</RegisterLinkMessage>
      <RegisterLink to="/register">Start here</RegisterLink>
      </RegisterLinkWrapper>
    </ul>
  );
}

export default AuthNav;