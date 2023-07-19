import RegistrationForm from 'components/RegistrationForm';
import {
  FormWrapper,
  UserText,
  LoginLink,
  FormTitle,
} from './Registration.styled';

function Registration() {
  return (
    <FormWrapper>
      <FormTitle>Create account</FormTitle>
      <RegistrationForm />
      <UserText>Already have an account?</UserText>
      <LoginLink to="/login">Log in</LoginLink>
    </FormWrapper>
  );
}

export default Registration;