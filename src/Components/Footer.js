import React from "react";
import styled from "styled-components";

const FooterNav = styled.div`
  background-color: #2e3f57;
  color: white;
  padding-bottom: 3%;
`;

const FooterLinks = styled.div`

  display: flex;
  flex-direction; row;
  align-items: center;
  justify-content: space-around;

`;

const HrStyling = styled.hr`
  width: 75%;
  height: 0.1px;
`;

const Copy = styled.p`
  margin: 0;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterNav>
      <FooterLinks className="Footer-Links">
        <h1>LOGO</h1>
      </FooterLinks>
      <HrStyling></HrStyling>
      <Copy>
        <small>&copy;Copyright 2019</small>
      </Copy>
    </FooterNav>
  );
}
