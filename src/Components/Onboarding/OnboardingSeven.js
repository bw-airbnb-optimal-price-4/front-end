import React, { Component } from "react";
import styled from "styled-components";
import Header from "../Header";

const DivStyling = styled.div`
  margin: 8% 0% 3%;
  text-align: center;
  line-height: 3;
`;

const ButtonStyling = styled.button`
  border-radius: 6px;
  border: none;
  width: 10%;
  height: 30px;
  margin: 3% 2.5% 5% 2.5%;
  color: white;
  background-color: #19bd60;
`;

export class OnboardingSeven extends Component {
  render() {
    return (
      <div>
        <Header />
        <DivStyling>
          <h1>Congratulations!</h1>
          <h2>Your listing was completed!</h2>
          <br/>
          <h3>Would you like to add a new listing or navigate to your dashboard?</h3>
          <ButtonStyling>New Listing</ButtonStyling>
          <ButtonStyling>Dashboard</ButtonStyling>
        </DivStyling>
        
      </div>
    );
  }
}

export default OnboardingSeven;
