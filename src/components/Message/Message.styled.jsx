import styled from '@emotion/styled';
import { css } from '@emotion/react';

const messageTextDynamicStyle = ([theme]) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 24px;
  width: 90%;
  background-color: ${theme.colors.mainBackgroundColor};
  color: ${theme.colors.mainColor};
  border-radius: ${theme.borderRadius};
  border: 2px solid ${theme.colors.mainColor};
  text-align: center;
`;

export const MessageText = styled.p`
  ${messageTextDynamicStyle}
`;