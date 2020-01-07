import React from "react";
import styled from "styled-components";
import Header from "../Header";

const DivStyling = styled.div`
  text-align: center;
  margin: 10%;
  line-height: 5.0;
`;

export default function OnboardingFour() {
  return (
    <div>
      <Header />
      <DivStyling>
        <h2>Calculating your optimal price!</h2>
        <h1>Loading...</h1>
      </DivStyling>
    </div>  
  );
}