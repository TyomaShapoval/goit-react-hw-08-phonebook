import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Container } from '@mui/material';
const RegisterPage = () => {
  return (
    <Container sx={{ mt: { xs: '5px', sm: '20px' } }}>
      <RegisterForm />
    </Container>
  );
};

export default RegisterPage;