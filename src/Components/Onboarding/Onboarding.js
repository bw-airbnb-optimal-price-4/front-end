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
    propertyType: "",
    roomType: "",
    neighborhood: "",
    accomodates: "1",
    bedrooms: "1",
    beds: "1",
    bathrooms: "1",
    listingPrice: "",
    prediction: {}
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

  // Axios post and get
  axiosRequests = async(values) => {
    const token = getToken()
    console.log(token)
    const listing = await axios({
        method: "post",
        url: process.env.REACT_APP_API_URL + 'restricted/listings',
        data: {
          "roomTypes": values.roomType,
          "userId": 2,
          "propertyTypeId": Number(values.propertyTypeId),
          "neighborhoodId": Number(values.neighborhoodId),
          "accommadates": Number(values.guests),
          "beds": Number(values.beds),
          "bedrooms": Number(values.bedrooms),
          "bathrooms": Number(values.bathrooms)
        },
        headers: {
          "Content-Type": "application/json",
          "token": `${token}`,
        },
    })
    const prediction = await axios.get('https://airbnb-optimal-price-4.herokuapp.com/prediction', {params:{id: listing.id}}) // change id to listing.id
    this.setState({prediction: prediction.data})
    return (prediction.data);
  }

  render() {
    const { step } = this.state;
    const { neighborhood, propertyType, roomType, accomodates, bedrooms, beds, bathrooms} = this.state;
    const values = { neighborhood, propertyType, roomType, accomodates, bedrooms, beds, bathrooms};

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
          axiosRequests={this.axiosRequests}
          handleChange={this.handleChange}
          values={values}
          />
        )
      case 4:
        return (
          <OnboardingFive
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}/>
        )
      case 5:
        return (
          <OnboardingSix
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          values={values}/>
        )
      case 6:
        return (
          <OnboardingSeven />
        )
      }
    }
  }

export default Onboarding;
