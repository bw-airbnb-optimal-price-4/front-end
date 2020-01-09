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
  color: white;
  background-color: #19bd60;
`;

const BackButtonStyling = styled.button`
  border-radius: 6px;
  border: none;
  width: 10%;
  height: 30px;
  margin: 3% 37% 0% 3%;
  color: black;
  background-color: #cccccc;
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
    const { values: { listingName, streetAddress, city, state, propertyType, guests, bedrooms, beds, bathrooms, description, propertyPicture, listingPrice } } = this.props;
      return (
        <div>
          <Header />
          <DivStyling>
            <h2>Please review your listing:</h2>
            <div>
            <p>Listing Name: {listingName}</p>
            <p>Address: {streetAddress}</p>
            <p>City: {city}</p>
            <p>State: {state}</p>
            <p>Property Type: {propertyType}</p>
            <p>Accomodates: {guests}</p>
            <p>Bedrooms: {bedrooms}</p>
            <p>Beds: {beds}</p>
            <p>Bathrooms: {bathrooms}</p>
            <p>Description: {description}</p>
            <p>Listing Price: {listingPrice}</p>
            <img src={propertyPicture}/>
            </div>
            <ButtonStyling onClick={this.continue}>List Property</ButtonStyling>
            <BackButtonStyling onClick={this.back}>Edit Listing</BackButtonStyling> 
          </DivStyling>
        </div>
      );
    }
  }

export default OnboardingSix;