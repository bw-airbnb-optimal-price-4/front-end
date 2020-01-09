import React, { Component } from "react";
import styled from "styled-components";
import Header from "../Header";

const DivStyling = styled.div`
  margin: 5% 0% 3%;
  text-align: center;
  line-height: 2.5;
`;

const FormStyling = styled.form`
  text-align: right;
  margin-right: 37%;
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

const SelectStyling = styled.select`
  margin: 2% 5%;
  width: 4%;
`;

export class OnboardingThree extends Component {
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
          <h3>Step 2 of 3</h3>
        </DivStyling>
        <FormStyling>
          <div>
            <label>Choose max number of guests:</label>
            <SelectStyling name="number-of-guests"
              onChange={handleChange('guests')}
              defaultValue={values.guests}>
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3</option>
              <option value="four">4</option>
              <option value="five">5</option>
              <option value="six">6</option>
              <option value="seven">7</option>
              <option value="eight">8</option>
              <option value="nine">9</option>
              <option value="ten">10</option>
              <option value="eleven">11</option>
              <option value="twelve">12</option>  
            </SelectStyling>
          </div>
          <div>
            <label>Choose number of bedrooms:</label>
            <SelectStyling name="number-of-bedrooms"
              onChange={handleChange('bedrooms')}
              defaultValue={values.bedrooms}>
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3</option>
              <option value="four">4</option>
              <option value="five">5</option>
              <option value="six">6</option>
              <option value="seven">7</option>
              <option value="eight">8</option>
            </SelectStyling>
          </div>
          <div> 
            <label>Choose number of beds:</label>
            <SelectStyling name="total-beds"
              onChange={handleChange('beds')}
              defaultValue={values.beds}>
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3</option>
              <option value="four">4</option>
              <option value="five">5</option>
              <option value="six">6</option>
              <option value="seven">7</option>
              <option value="eight">8</option>
            </SelectStyling>
          </div>
          <div>  
            <label>Choose number of bathrooms:</label>
            <SelectStyling name="number-of-bathrooms"
              onChange={handleChange('bathrooms')}
              defaultValue={values.bathrooms}>
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3</option>
              <option value="four">4</option>
              <option value="five">5</option>
              <option value="six">6</option>
              <option value="seven">7</option>
              <option value="eight">8</option>
            </SelectStyling>
          </div>
        </FormStyling>
        <ButtonStyling onClick={this.continue}>Step 3</ButtonStyling>
      </div>
    );
  }
}

export default OnboardingThree;