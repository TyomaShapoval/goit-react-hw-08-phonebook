import LoginForm from 'components/LoginForm';
import { FormWrapper, NewUserText, RegisterLink, FormTitle } from './Login.styled';

function Login() {
  return (
    <FormWrapper>
      <FormTitle>Log in</FormTitle>
      <LoginForm />
      <NewUserText>New user?</NewUserText>
      <RegisterLink to="/register">Create your account</RegisterLink>
    </FormWrapper>
  );
}

export default Login;