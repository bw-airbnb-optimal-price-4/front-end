import React, { Component } from "react";
import styled from "styled-components";
import Header from "../Header";

const DivStyling = styled.div`
  margin: 5% 0% 3%;
  text-align: center;
`;

const FormStyling = styled.form`
  text-align: right;
  margin-right: 37%;
`;

const ButtonStyling = styled.button`
  border-radius: 6px;
  border: none;
  width: 10%;
  height: 30px;
  margin: 5% 3% 5% 37%;
  color: white;
  background-color: #19bd60;
  box-shadow: 5px 5px 5px rgba(204, 204, 204, 1);

  &:hover {
    background-color: #128745;
  }
`;

const BackButtonStyling = styled.button`
  border-radius: 6px;
  border: none;
  width: 10%;
  height: 30px;
  margin: 5% 37% 5% 3%;
  color: black;
  background-color: #f2f2f2;
  box-shadow: 5px 5px 5px rgba(204, 204, 204, 1);

  &:hover {
    background-color: #cccccc;
  }
`;

const SelectStyling = styled.select`
  margin: 3% 5%;
  width: 4%;
`;

export class OnboardingThree extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();  
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();  
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <Header />
        <DivStyling>
          <h2>Obtain your first optimal price!</h2>
          <h3>Step 2 of 3</h3>
        </DivStyling>
        <FormStyling>
          <div>
            <label>Choose max number of guests:</label>
            <SelectStyling name="number-of-guests"
              onChange={handleChange('guests')}
              defaultValue={values.guests}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>  
            </SelectStyling>
          </div>
          <div>
            <label>Choose number of bedrooms:</label>
            <SelectStyling name="number-of-bedrooms"
              onChange={handleChange('bedrooms')}
              defaultValue={values.bedrooms}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </SelectStyling>
          </div>
          <div> 
            <label>Choose number of beds:</label>
            <SelectStyling name="total-beds"
              onChange={handleChange('beds')}
              defaultValue={values.beds}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </SelectStyling>
          </div>
          <div>  
            <label>Choose number of bathrooms:</label>
            <SelectStyling name="number-of-bathrooms"
              onChange={handleChange('bathrooms')}
              defaultValue={values.bathrooms}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </SelectStyling>
          </div>
        </FormStyling>
        <ButtonStyling onClick={this.continue}>Step 3</ButtonStyling>
        <BackButtonStyling onClick={this.back}>Back</BackButtonStyling>
      </div>
    );
  }
}

export default OnboardingThree;