import React, { Component } from "react";
import OnboardingOne from "./OnboardingOne";
import OnboardingTwo from "./OnboardingTwo";
import OnboardingThree from "./OnboardingThree";
import OnboardingFour from "./OnboardingFour";
import OnboardingFive from "./OnboardingFive";
import OnboardingSix from "./OnboardingSix";
import OnboardingSeven from "./OnboardingSeven";

export class Onboarding extends Component {
  state = {
    step: 1,
    listingName: "",
    streetAddress: "",
    city: "",
    state: "",
    propertyType: "",
    guests: "",
    bedrooms: "",
    beds: "",
    bathrooms: "",
    description: "",
    propertyPicture: "",
    listingPrice: "",
    optimalPrice: ""
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value});
  };

  render() {
    const { step } = this.state;
    const { listingName, streetAddress, city, state, propertyType, guests, bedrooms, beds, bathrooms, description, propertyPicture, listingPrice, optimalPrice} = this.state;
    const values = { listingName, streetAddress, city, state, propertyType, guests, bedrooms, beds, bathrooms, description, propertyPicture, listingPrice, optimalPrice };

    switch(step) {
      case 1:
        return (
          <OnboardingOne 
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )    
      case 2:
        return (      
          <OnboardingTwo 
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          />
        )  
      case 3:
        return (    
          <OnboardingThree 
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          />            
        )    
      case 4:
        return (      
          <OnboardingFour 
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}/>
        )
      case 5:
        return (
          <OnboardingFive 
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}/>            
        )    
      case 6:
        return (      
          <OnboardingSix 
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          values={values}/>
        )      
      case 7:
        return (      
          <OnboardingSeven />
        )      
      }
    }
  }

export default Onboarding;
