import React, { Component } from "react";
import styled from "styled-components";
import Header from "../Header";

const DivStyling = styled.div`
  text-align: center;
  margin: 3%;
  line-height: 2.0;
`;

const ButtonStyling = styled.button`
  border-radius: 6px;
  border: none;
  width: 10%;
  height: 30px;
  margin: 3% 3% 0% 37%;
  box-shadow: 5px 5px 5px rgba(204, 204, 204, 1);
  background-color: #cccccc;
  color: #666666;

`;

const BackButtonStyling = styled.button`
  border-radius: 6px;
  border: none;
  width: 10%;
  height: 30px;
  margin: 3% 37% 0% 3%;
  color: black;
  background-color: #f2f2f2;
  box-shadow: 5px 5px 5px rgba(204, 204, 204, 1);

  &:hover {
    background-color: #cccccc;
  }
`;

export class OnboardingSix extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values } = this.props;
      return (
        <div>
          <Header />
          <DivStyling>
            <h2>Please review your listing:</h2>
            <div>
            <p>Property Type: {values.propertyTypeName}</p>
            <p>Neighborhood: {values.neighborhoodName}</p>
            <p>Room Type: {values.roomType}</p>
            <p>Accomodates: {values.accomodates}</p>
            <p>Bedrooms: {values.bedrooms}</p>
            <p>Beds: {values.beds}</p>
            <p>Bathrooms: {values.bathrooms}</p>
            <p>Listing Price: ${values.listingPrice}</p>
            </div>
            <ButtonStyling disabled onClick={this.continue}>List Property</ButtonStyling>
            <BackButtonStyling onClick={this.back}>Edit Listing</BackButtonStyling>
          </DivStyling>
        </div>
      );
    }
  }

export default OnboardingSix;