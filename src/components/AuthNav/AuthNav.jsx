import styled from "styled-components";
import scss from "./AuthNav.module.scss";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`

  &.active {
    background-color: #2EE59D;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-2px);
  }
`;

export const AuthNav = () => {
  return (
    <nav className={scss.navAuth}>
      <StyledLink to="/login" className={scss.auth}>
        Log In
      </StyledLink>
      <StyledLink to="/register" className={scss.auth}>
          Register
      </StyledLink>
    </nav>
  );
};