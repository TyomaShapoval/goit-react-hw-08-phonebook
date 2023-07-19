import styled from '@emotion/styled';
import { css } from '@emotion/react';

const styledLabelDynamicStyle = ({ theme }) => css`
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: ${theme.colors.mainColor};
`;

const styledInputDynamicStyle = ({ theme }) => css`
  width: 300px;
  padding: 12px 12px 12px 15px;
  font-size: 16px;
  border: 2px solid ${theme.colors.mainColor};
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.mainBackgroundColor};
  color: ${theme.colors.mainColor};
`;

export const StyledLabel = styled.label`
  ${styledLabelDynamicStyle}
`;

export const StyledInput = styled.input`
  ${styledInputDynamicStyle}
`;