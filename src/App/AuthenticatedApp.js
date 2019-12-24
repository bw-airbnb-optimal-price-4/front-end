import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Onboarding from "../Components/Onboarding/Onboarding";
import OnboardingTwo from "../Components/Onboarding/OnboardingTwo";

const AuthenticatedApp = () => (
  <Router>
    <Route exact path="/onboarding" component={Onboarding} />
    <Route exact path="/onboardingtwo" component={OnboardingTwo} />
  </Router>
);

export default AuthenticatedApp;
