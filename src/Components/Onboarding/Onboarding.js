import React, { Component } from "react";
import OnboardingOne from "./OnboardingOne";
import OnboardingTwo from "./OnboardingTwo";
import OnboardingThree from "./OnboardingThree";
import OnboardingFour from "./OnboardingFour";
import OnboardingFive from "./OnboardingFive";
import OnboardingSix from "./OnboardingSix";
import OnboardingSixNo from "./OnboardingSixNo";
import OnboardingSeven from "./OnboardingSeven";
import OnboardingEight from "./OnboardingEight";

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
    propertyPicture: ""
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value});
  };

  render() {
    const { step } = this.state;
    const { listingName, streetAddress, city, state, propertyType, guests, bedrooms, beds, bathrooms, description, propertyPicture} = this.state;
    const values = { listingName, streetAddress, city, state, propertyType, guests, bedrooms, beds, bathrooms, description, propertyPicture };

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
          handleChange={this.handleChange}
          values={values}
          />
        )  
      case 3:
        return (    
          <OnboardingThree 
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}
          />            
        )    
      case 4:
        return (      
          <OnboardingFour 
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={values}/>
        )
      case 5:
        return (
          <OnboardingFive />            
        )    
      case 6:
        return (      
          <OnboardingSix />
        )    
      case 7:
        return (      
          <OnboardingSixNo />
        )    
      case 8:
        return (      
          <OnboardingSeven />
        )    
      case 9:
        return (      
          <OnboardingEight />
        )    
      }
    }
  }

export default Onboarding;
