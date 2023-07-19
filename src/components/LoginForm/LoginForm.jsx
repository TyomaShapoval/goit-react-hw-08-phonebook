import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userSignIn } from 'redux/auth/operations';
import { loginFormSchema } from 'schemas';
import {
  StyledLabel,
  StyledForm,
  StyledInput,
  StyledButton,
} from './LoginForm.styled';

function LoginForm() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    formState,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginFormSchema),
    mode: 'onTouched',
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  const loginUser = data => {
    dispatch(userSignIn(data));
  };

  return (
    <StyledForm onSubmit={handleSubmit(loginUser)}>
      <StyledLabel>
        Email
        <StyledInput
          type="email"
          placeholder="Enter your email"
          autoComplete="off"
          {...register('email')}
        />
        {errors.email && <div>{errors.email?.message}</div>}
      </StyledLabel>

      <StyledLabel>
        Password
        <StyledInput
          type="password"
          placeholder="Enter your password"
          autoComplete="off"
          {...register('password')}
        />
        {errors.password && <div>{errors.password?.message}</div>}
      </StyledLabel>

      <StyledButton type="submit">Log in</StyledButton>
    </StyledForm>
  );
}

export default LoginForm;