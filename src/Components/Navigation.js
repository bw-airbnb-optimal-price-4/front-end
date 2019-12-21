import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavStyling = styled.div`
  background-color: #1FA9AB;
  display: flex;
  flex-direction; row;
  align-items: center;
  justify-content: space-around;
  color: white;
`;

const LinkTag = styled(Link)`
  margin-right: 15px;
  color: white;
  text-decoration: none;
`;

export default function Navigation() {
  return (
    <NavStyling className="Nav">
      <h1 className="Logo">LOGO</h1>
      <div className="Nav-Links">
        <LinkTag to="/">Sign In</LinkTag>
        <LinkTag to="/signup">Sign Up</LinkTag>
      </div>
    </NavStyling>
  );
}
