import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';

const containerDynamicStyle = ({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  max-width: 320px;
  margin: 0 auto;
  padding: 0 20px;
  ${theme.breakPoinrs.tablet} {
    max-width: 768px;
    padding: 0 32px;
  }
  ${theme.breakPoinrs.desktop} {
    max-width: 1200px;
  }
`;

export const Main = styled.main`
  flex-grow: 1;
`;

const homeLinkDynamicStyle = ({ theme }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  transform: scale(1);
  color: ${theme.colors.mainColor};
  border: 2px solid ${theme.colors.mainColor};
  border-radius: ${theme.borderRadius};
  font-size: 24px;
  font-weight: ${theme.fontStyles.weight};
  transition: color 250ms linear, background-color 250ms linear;
  &:hover,
  &:focus-visible {
    color: ${theme.colors.accentColor};
    border: 2px solid ${theme.colors.accentColor};
    transform: scale(1.1);
  }
`;

export const Image = styled.img`
  width: 600px;
`;

const errorMessageDynamicStyle = ({ theme }) => css`
  margin: 0;
  color: ${theme.colors.mainColor};
  font-size: ${theme.fontStyles.size};
  font-weight: ${theme.fontStyles.weight};
  text-transform: uppercase;
`;

export const Container = styled.div`
  ${containerDynamicStyle}
`;

export const HomeLink = styled(NavLink)`
  ${homeLinkDynamicStyle}
`;

export const ErrorMessage = styled.p`
  ${errorMessageDynamicStyle}
`;
