import styled from '@emotion/styled';
import { css } from '@emotion/react';

const styledFormDynamicStyle = ({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 20px;
  padding: 30px;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.secondaryBackgroundColor};
  box-shadow: ${theme.boxShadow};
`;

const styledLabelDynamicStyle = ({ theme }) => css`
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
`;

const styledInputDynamicStyle = ({ theme }) => css`
  width: 300px;
  padding: 12px 12px 12px 15px;
  font-size: 16px;
  border: 2px solid ${theme.colors.mainColor};
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.mainBackgroundColor};
  &::placeholder {
    font-size: 16px;
    color: ${theme.colors.mainColor};
  }
`;

const styledButtonDynamicStyle = ({ theme }) => css`
  width: 100%;
  padding: 12px;
  transform: scale(1);
  color: ${theme.colors.mainColor};
  border: 2px solid ${theme.colors.mainColor};
  border-radius: ${theme.borderRadius};
  font-size: ${theme.fontStyles.size};
  font-weight: ${theme.fontStyles.weight};
  background-color: ${theme.colors.mainBackgroundColor};
  transition: transform 250ms ease-out, color 250ms ease-out,
    border 250ms ease-out;
  &:hover,
  &:focus-visible {
    color: ${theme.colors.accentColor};
    border: 2px solid ${theme.colors.accentColor};
    transform: scale(1.1);
  }
`;

export const StyledForm = styled.form`
  ${styledFormDynamicStyle}
`;

export const StyledLabel = styled.label`
  ${styledLabelDynamicStyle}
`;

export const StyledInput = styled.input`
  ${styledInputDynamicStyle}
`;

export const StyledButton = styled.button`
  ${styledButtonDynamicStyle}
`;