import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`;

const formTitleDynamicStyle = ({ theme }) => css`
  margin: 20px 0 0 0;
  color: ${theme.colors.mainColor};
`;

const newUserTextDynamicStyle = ({ theme }) => css`
  margin-top: 20px;
  color: ${theme.colors.mainColor};
  font-size: ${theme.fontStyles.size};
`;

const registerLinkDynamicStyle = ({ theme }) => css`
  display: block;
  width: 280px;
  padding: 12px;
  transform: scale(1);
  color: ${theme.colors.mainColor};
  font-size: ${theme.fontStyles.size};
  font-weight: ${theme.fontStyles.weight};
  text-align: center;
  border: 2px solid ${theme.colors.mainColor};
  border-radius: ${theme.borderRadius};
  transition: transform 250ms ease-out, color 250ms ease-out,
    border 250ms ease-out;
  &:hover,
  &:focus-visible {
    color: ${theme.colors.accentColor};
    border: 2px solid ${theme.colors.accentColor};
    transform: scale(1.1);
  }
`;

export const FormTitle = styled.h1`
  ${formTitleDynamicStyle}
`;

export const NewUserText = styled.p`
  ${newUserTextDynamicStyle}
`;

export const RegisterLink = styled(Link)`
  ${registerLinkDynamicStyle}
`;