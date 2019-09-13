import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  return (
    <StyledNav>
      <NavLink to="/ground">Ground</NavLink>
      <NavLink to="/fire">Fire</NavLink>
    </StyledNav>
  );
}

export default Navigation;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;

  a {
    padding: 10px;
    margin: 10px 0;
  }
`;
