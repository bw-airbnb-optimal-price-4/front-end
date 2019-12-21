import React from "react";
import "./App.css";
import SignInForm from "./Components/SignInForm";
import SignUpForm from "./Components/SignUpForm";
import Onboarding from "./Components/Onboarding/Onboarding";
import OnboardingTwo from "./Components/Onboarding/OnboardingTwo";
import Footer from "./Components/Footer";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/signin" component={SignInForm} />
      <Route exact path="/signup" component={SignUpForm} />
      <Route exact path="/onboarding" component={Onboarding} />
      <Route exact path="/onboardingtwo" component={OnboardingTwo} />
      <Footer />
    </div>
  );
}

export default App;
