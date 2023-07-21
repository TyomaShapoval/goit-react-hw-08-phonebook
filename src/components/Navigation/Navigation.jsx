import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import scss from "./Navigation.module.scss"

import { selectIsLoggedIn } from '../../redux/auth/selectors';

const StyledLink = styled(NavLink)`
  color: #D2D9DC;

  &.active {
    color: #545E2E;
    &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 2px;
        background-color: #545E2E;
        top: 100%;
        left: -3%;
    }
  }
`;

export const Navigation = () => {

  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <StyledLink to="/" className={scss.navLink}>
          Home
      </StyledLink>
      {isLoggedIn && (
        <StyledLink to="/contacts" className={scss.navLink}>
            Contacts
        </StyledLink>
      )}
    </nav>
  );
};