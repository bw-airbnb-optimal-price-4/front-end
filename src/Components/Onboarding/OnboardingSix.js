import React, { Component } from "react";
import styled from "styled-components";
import Header from "../Header";

const DivStyling = styled.div`
  text-align: center;
  margin: 5%;
  line-height: 4.0;
`;

const SecondDivStyling = styled.div`
  text-align: center;
  margin: 5%;
`;

const ButtonStyling = styled.button`
  border-radius: 6px;
  border: none;
  width: 5%;
  height: 30px;
  margin: 5% 2.5% 5% 2.5%;
  color: white;
  background-color: #19bd60;
`;

export class OnboardingSix extends Component {
  render() {
    return (
      <div>
        <Header />
        <DivStyling>
          <h2>The optimal price is:</h2>
          <h3>"$259.00"</h3>
          <h4>Listing at this price would allow you to receive "$7,770.00" a month on average at full occupancy.</h4>
        <SecondDivStyling>
          <h4>Do you wish to list at this price?</h4>
          <ButtonStyling>Yes</ButtonStyling>
          <ButtonStyling>No</ButtonStyling>
        </SecondDivStyling>  
        </DivStyling>
      </div>
    );
  }
}

export default OnboardingSix;