import React from "react";
import styled from "styled-components";

const HeaderStyling = styled.header`
  background-color: #1FA9AB;
  display: flex;
  flex-direction; row;
  align-items: left;
  color: white;
`;

const LogoStyling = styled.h1`
  font-size: 2em;
`;

const Header = () => {
  return (
    <HeaderStyling className="Header">
      <LogoStyling className="Logo">LOGO</LogoStyling>
    </HeaderStyling>
  );
};

export default Header;
