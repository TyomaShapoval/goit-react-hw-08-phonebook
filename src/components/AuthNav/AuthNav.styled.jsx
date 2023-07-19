import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const signInLinkDynamicStyle = ({theme}) => css`
  display: block;
  padding: 12px;
  transform: scale(1.1);
  text-align: center;
  font-size: 24px;
  font-weight: ${theme.fontStyles.weight};
  color: ${theme.colors.mainColor};
  border: 2px solid ${theme.colors.mainColor};
  border-radius: ${theme.borderRadius};
  transition: transform 250ms ease-out, color 250ms ease-out,
    border 250ms ease-out;
  &:hover,
  &:focus-visible {
    color: ${theme.colors.accentColor};
    border: 2px solid ${theme.colors.accentColor};
  }
`
export const RegisterLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;

const registerLinkMessageDynamicStyle = ({theme}) => css`
  margin: 0;
  font-size: ${theme.fontStyles.size};
  color: ${theme.colors.mainColor};
`
const registerLinkDynamicStyle = ({theme}) => css`
  font-size: ${theme.fontStyles.size};
  font-weight: ${theme.fontStyles.weight};
  color: ${theme.colors.mainColor};
  transition: color 250ms ease-out;
  &:hover,
  &:focus-visible {
    color: ${theme.colors.accentColor};
  }
`

export const SignInLink = styled(Link)`
  ${signInLinkDynamicStyle}
`

export const RegisterLinkMessage = styled.p`
  ${registerLinkMessageDynamicStyle}
`

export const RegisterLink = styled(Link)`
  ${registerLinkDynamicStyle}
  `