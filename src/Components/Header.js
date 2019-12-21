import React from "react";
import styled from "styled-components";

const NavStyling = styled.div`
  background-color: #1FA9AB;
  display: flex;
  flex-direction; row;
  align-items: left;
  color: white;
`;

const LogoStyling = styled.h1`
  margin-left: 5%;
`;

export default function Navigation() {
    return (
      <NavStyling className="Nav">
        <LogoStyling className="Logo">LOGO</LogoStyling>
      </NavStyling>
    );
}