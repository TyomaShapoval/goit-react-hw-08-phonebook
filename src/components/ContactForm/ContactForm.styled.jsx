import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 65%;
`;

const labelDynamicStyle = ({theme}) => css`
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: ${theme.colors.mainColor};
  div {
    padding: 12px;
    border: 2px solid ${theme.colors.mainColor};
    border-radius: ${theme.borderRadius};
    background-color: ${theme.colors.accentColor};
    color: ${theme.colors.secondaryBackgroundColor};
    width: 100%;
    font-size: 16px;
    &::first-letter {
      text-transform: uppercase;
    }
  }
`

const inputDynamicStyle = ({theme}) => css`
   width: 300px;
  padding: 12px 12px 12px 15px;
  font-size: 16px;
  border-radius: ${theme.borderRadius};
  border: 2px solid ${theme.colors.mainColor};
  background-color: ${theme.colors.mainBackgroundColor};
  color: ${theme.colors.mainColor};
  &::placeholder {
    color: ${theme.colors.mainColor};
    font-size: 16px;
  }
`

const buttonDynamicStyle = ({ theme }) =>
  css`
    width: 100%;
    padding: 12px;
    color: ${theme.colors.mainColor};
    border-radius: ${theme.borderRadius};
    border: 2px solid ${theme.colors.mainColor};
    font-size: ${theme.fontStyles.size};
    font-weight: ${theme.fontStyles.weight};
    background-color: ${theme.colors.mainBackgroundColor};
    transition: transform 250ms ease-out, background-color 250ms ease-out;
    &:hover,
    &:focus-visible {
      color: ${theme.colors.accentColor};
      border: '2px solid ${theme.colors.accentColor}';
      transform: 'scale(1.1)';
    }
  `;
export const StyledLabel = styled.label`
  ${labelDynamicStyle}
`
export const StyledInput = styled.input`
  ${inputDynamicStyle}
`

  export const StyledButton = styled.button `
    ${buttonDynamicStyle}
  `