import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';

const styledNavigationDynamicStyle = ({ theme }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  ${theme.breakPoints.tablet} {
    justify-content: center;
    gap: 30px;
  }
`;

const navigationLinkDynamicStyle = ({ theme }) => css`
  color: ${theme.colors.mainColor};
  transform: scale(1);
  font-size: 24px;
  font-weight: ${theme.fontStyles.weight};
  transition: color 250ms ease-out, transform 250ms ease-out;
  &:hover,
  &:focus-visible {
    color: ${theme.colors.accentColor};
  }
  &.active {
    color: ${theme.colors.accentColor};
    &:hover,
    &:focus-visible {
      transform: scale(1.1);
      color: ${theme.colors.mainColor};
      ${theme.breakPoints.tablet} {
        font-size: ${theme.fontStyles.size};
      }
      ${theme.breakPoints.desktop} {
        font-size: 24px;
      }
    }
  }
`;

export const StyledNavigation = styled.nav`
  ${styledNavigationDynamicStyle}
`;

export const NavigationLink = styled(NavLink)`
  ${navigationLinkDynamicStyle}
`;