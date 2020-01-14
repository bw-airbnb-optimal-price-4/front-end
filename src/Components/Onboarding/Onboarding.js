import React, { Component } from "react";
import OnboardingOne from "./OnboardingOne";
import OnboardingTwo from "./OnboardingTwo";
import OnboardingThree from "./OnboardingThree";
import OnboardingFive from "./OnboardingFive";
import OnboardingSix from "./OnboardingSix";
import OnboardingSeven from "./OnboardingSeven";
import axios from "axios";
import {getToken} from "../../utils/auth-client"

export class Onboarding extends Component {
  state = {
    step: 1,
    accomodates: "1",
    bathrooms: "1",
    bedrooms: "1",
    beds: "1",
    neighborhood: "",
    neighborhoodName: "",
    propertyType: "",
    propertyTypeName: "",
    roomType: "",
    listingPrice: ""
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

  addValues = (name, value) => {
    this.setState({[name]: value})
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value});
  };

  // Axios post and get
  axiosRequests = async() => {
    const token = getToken()
    const listing = await axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + 'restricted/listings',
        data: {
          "roomType": this.state.roomType,
          "propertyTypeId": Number(this.state.propertyType),
          "neighborhoodId": Number(this.state.neighborhood),
          "accommodates": Number(this.state.accomodates),
          "beds": Number(this.state.beds),
          "bedrooms": Number(this.state.bedrooms),
          "bathrooms": Number(this.state.bathrooms)
        },
        headers: {
          "Content-Type": "application/json",
          "token": `${token}`,
        },
    })
    const prediction = await axios.get('http://localhost:5000/prediction', {params:{id: listing.data.id}})
    this.setState({prediction: prediction.data})
    this.setState({listingPrice: prediction.data.prediction})
  }

  render() {
    const { step } = this.state;

    switch(step) {
      case 1:
        return (
          <OnboardingOne
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={this.state}
          />
        )
      case 2:
        return (
          <OnboardingTwo
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={this.state}
          addValues={this.addValues}
          />
        )
      case 3:
        return (
          <OnboardingThree
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          axiosRequests={this.axiosRequests}
          handleChange={this.handleChange}
          values={this.state}
          />
        )
      case 4:
        return (
          <OnboardingFive
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={this.state}/>
        )
      case 5:
        return (
          <OnboardingSix
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          values={this.state}/>
        )
      case 6:
        return (
          <OnboardingSeven />
        )

        // no default
      }
    }
  }

export default Onboarding;
