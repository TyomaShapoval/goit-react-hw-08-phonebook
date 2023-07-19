import styled from '@emotion/styled';
import { css } from '@emotion/react';

const listItemDynamicStyle = ({theme}) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 12px;
  font-size: 16px;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.mainBackgroundColor};
  color: ${theme.colors.mainColor};
`

export const ContactInfo = styled.p`
  margin: 0;
`;

const styledButtonDynamicStyle = ({theme}) => css`
   width: 70px;
  height: 40px;
  transform: scale(1);
  background-color: ${theme.colors.mainColor};
  border-radius: ${theme.borderRadius};
  border: 2px solid ${theme.colors.mainColor};
  color: ${theme.colors.mainBackgroundColor};
  font-size: ${theme.fontStyles.size};
  transition: transform 250ms ease-out, background-color 250ms ease-out;
  &:hover,
  &:focus-visible {
    transform: scale(1.1);
  }
`

export const ListItem = styled.li`
${listItemDynamicStyle}
`

export const StyledButton = styled.button`
${styledButtonDynamicStyle}
`