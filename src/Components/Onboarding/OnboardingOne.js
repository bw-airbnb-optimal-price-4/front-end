import React, { Component } from "react";
import styled from "styled-components";
import Header from "../Header";

const DivStyling = styled.div`
  text-align: center;
  margin: 15% 0% 5%;
`;

const ButtonStyling = styled.button`
  
  border-radius: 6px;
  border: none;
  width: 16%;
  height: 30px;
  margin: 0% 42% 10% 42%;
  color: white;
  background-color: #19bd60;
  box-shadow: 5px 5px 5px rgba(204, 204, 204, 1);

  &:hover {
    background-color: #128745;
  }
`;

export class OnboardingOne extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();  
  }

  render() {
    return (
      <div>
        <Header />
        <DivStyling>
          <h2>Welcome to AirBnB Optmizer!</h2>
          <h2>Let's walk you through getting the</h2>
          <h2>optimal price for an AirBnB listing.</h2>
        </DivStyling>
        <ButtonStyling onClick={this.continue}>Get Started</ButtonStyling>
      </div>    
    );
  }
}      

export default OnboardingOne;