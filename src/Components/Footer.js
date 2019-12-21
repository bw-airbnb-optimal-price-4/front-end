import React from "react";
import styled from "styled-components";

const FooterNav = styled.div`
  background-color: #2E3F57;
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


export default function Footer() {
    return(
      <FooterNav>
          <FooterLinks className="Footer-Links">         
            <h1>LOGO</h1>
          </FooterLinks>
          <HrStyling></HrStyling>
          <small>&copy;Copyright 2019</small>
      </FooterNav>  
    )
};