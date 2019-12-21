import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const HeaderStyling = styled.header`
  background-color: #1FA9AB;
  display: flex;
  flex-direction; row;
  align-items: center;
  justify-content: space-around;
  color: white;
`;

const LogoStyling = styled.h1`
  font-size: 2em;
`;

const Header = () => {
  return (
    <HeaderStyling className="Header">
      <LogoStyling className="Logo">LOGO</LogoStyling>
      <Navigation />
    </HeaderStyling>
  );
};

export default Header;
