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
  width: 10%;
  height: 30px;
  margin: 5% 2.5% 5% 2.5%;
  color: white;
  background-color: #19bd60;
`;

export class OnboardingSixNo extends Component {
  render() {
    return (
      <div>
        <Header />
        <DivStyling>
          <h2>The optimal price is:</h2>
          <h3>"$259.00"</h3>
        <SecondDivStyling>
          <h4>At what price do you wish to list your property for?</h4>
          <div>
            <input type="range" name="points" min="30" max="1000"/>
          </div>
          <ButtonStyling>List Property</ButtonStyling>
        </SecondDivStyling>  
        </DivStyling>
      </div>
    );
  }
}

export default OnboardingSixNo;