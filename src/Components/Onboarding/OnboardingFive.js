import React, { Component } from "react";
import styled from "styled-components";
import Header from "../Header";

const DivStyling = styled.div`
  text-align: center;
  margin: 4% 0% 3%;
  line-height: 4.0;
`;

const OptimalPriceStyling = styled.h2`
  color: #19bd60;
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
  margin: 5% 3% 0% 37%;
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
  margin: 5% 37% 0% 3%;
  color: black;
  background-color: #f2f2f2;
  box-shadow: 5px 5px 5px rgba(204, 204, 204, 1);

  &:hover {
    background-color: #cccccc;
  }
`;

export class OnboardingFive extends Component {
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
            <h2>The optimal price is:</h2>
            <OptimalPriceStyling>{"$" + (values.prediction.prediction)}</OptimalPriceStyling>
            <h4>Listing at this price would allow you to receive {"$" + (values.prediction.prediction * 30)} a month on average at full occupancy.</h4>
          <SecondDivStyling>
            <h4>What price do you wish to list your property for?</h4>
            <div>
              <input
                type="text"
                name="currency-field"
                id="currency-field"
                pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                data-type="currency"
                value={"$" + (values.prediction.prediction)}
                onChange={handleChange('listingPrice')}
                defaultValue={values.listingPrice}
              >
              </input>
            </div>
            <ButtonStyling onClick={this.continue}>Proceed</ButtonStyling>
            <BackButtonStyling onClick={this.back}>Back</BackButtonStyling>
          </SecondDivStyling>
          </DivStyling>
        </div>
      );
    }
  }

export default OnboardingFive;