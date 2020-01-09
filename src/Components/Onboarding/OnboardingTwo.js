import React, { Component } from "react";
import styled from "styled-components";
import Header from "../Header";

const DivStyling = styled.div`
  margin: 5% 0% 3%;
  text-align: center;
`;

const ButtonStyling = styled.button`
  border-radius: 6px;
  border: none;
  width: 16%;
  height: 30px;
  margin: 5% 42% 5% 42%;
  color: white;
  background-color: #19bd60;
`;

const InputStyling = styled.input`
  margin: 2% 30%;
  width: 40%;
`;

const CityStyling = styled.input`
  margin: 2% 0% 2% 30%;
  width: 30%;
`;

const StateStyling = styled.input`
  display: inline-block;
  margin: 2% 29.7% 2% 0%;
  width: 9.8%;
`;

const SelectStyling = styled.select`
  margin: 2% 30%;
  width: 40.3%;
`;

export class OnboardingTwo extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();  
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <Header />
        <DivStyling>
          <h2>Obtain your first optimal price!</h2>
          <h3>Step 1 of 3</h3>
        </DivStyling>
        <form>
          <InputStyling
            placeholder="Listing Name"
            id="listing-name"
            type="text"
            name="listing name"
            onChange={handleChange('listingName')}
            defaultValue={values.listingName}
          />
          <InputStyling
            placeholder="Street Address"
            id="street-address"
            type="text"
            name="street-address"
            onChange={handleChange('streetAddress')}
            defaultValue={values.streetAddress}
          />
          <CityStyling
            placeholder="City"
            id="city"
            type="text"
            name="city"
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <StateStyling
            placeholder="State"
            id="state"
            type="text"
            name="state"
            onChange={handleChange('state')}
            defaultValue={values.state}
          />
          <SelectStyling name="property-type"
            onChange={handleChange('propertyType')}
            defaultValue={values.propertyType}
          >
            <option value="" disabled selected hidden>
              Choose Property Type
            </option>
            <option value="house">House</option>
            <option value="town house">Town House</option>
            <option value="apartment">Apartment</option>
            <option value="room">Room</option>
          </SelectStyling>
        </form>
        <ButtonStyling onClick={this.continue}>Step 2</ButtonStyling>
      </div>
    );
  }
}

export default OnboardingTwo;
