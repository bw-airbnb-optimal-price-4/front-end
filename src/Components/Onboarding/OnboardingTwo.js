import React from "react";
import styled from "styled-components";
import Header from "../Header";

const DivStyling = styled.div`
  margin: 10%;
`;

const ButtonStyling = styled.button`
  border-radius: 6px;
  border: none;
  width: 15%;
  height: 30px;
  margin: 10% 25% 10% 25%;
  color: white;
  background-color: #19bd60;
`;

const InputStyling = styled.input`
  margin: 2% 10%;
  width: 40%;
`;

const CityStyling = styled.input`
  margin: 2% 0% 2% 10%;
  width: 30%;
`;

const StateStyling = styled.input`
  display: inline-block;
  margin: 2% 10% 2% 0%;
  width: 10%;
`;

const SelectStyling = styled.select`
  margin: 2% 10%;
  width: 41%;
`;

export default function Onboarding() {
  return (
    <div>
      <Header />
      <DivStyling>
        <h2>Obtain your first optimal price!</h2>
        <h3>Step 1 of 2</h3>
      </DivStyling>
      <form>
        <InputStyling
          placeholder="Listing Name"
          id="listing-name"
          type="text"
          name="listing name"
        />
        <InputStyling
          placeholder="Street Address"
          id="street-address"
          type="text"
          name="street-address"
        />
        <CityStyling
          placeholder="City"
          id="city"
          type="text"
          name="city"
        />
        <StateStyling
          placeholder="State"
          id="state"
          type="text"
          name="state"
        />
        <SelectStyling name="property-type">
          <option value="" disabled selected hidden>
            Choose Property Type
          </option>
          <option value="house">House</option>
          <option value="town house">Town House</option>
          <option value="apartment">Apartment</option>
          <option value="room">Room</option>
        </SelectStyling>
      </form>
      <ButtonStyling>Step 2</ButtonStyling>
    </div>
  );
}
