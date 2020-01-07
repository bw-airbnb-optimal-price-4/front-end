import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";
import Onboarding from "../Components/Onboarding/Onboarding";
import OnboardingTwo from "../Components/Onboarding/OnboardingTwo";
import OnboardingThree from "../Components/Onboarding/OnboardingThree";
import OnboardingFour from "../Components/Onboarding/OnboardingFour";
import OnboardingFive from "../Components/Onboarding/OnboardingFive";
import OnboardingSix from "../Components/Onboarding/OnboardingSix";
import OnboardingSixNo from "../Components/Onboarding/OnboardingSixNo";
import OnboardingSeven from "../Components/Onboarding/OnboardingSeven";
import OnboardingEight from "../Components/Onboarding/OnboardingEight";
import Logout from "../Components/Logout";
import Dashboard from "../Components/Dashboard";

const AuthenticatedApp = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/dashboard" />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/onboarding">
        <Onboarding />
      </Route>
      <Route path="/onboardingtwo">
        <OnboardingTwo />
      </Route>
      <Route path="/onboardingthree">
        <OnboardingThree />
      </Route>
      <Route path="/onboardingfour">
        <OnboardingFour />
      </Route>
      <Route path="/onboardingfive">
        <OnboardingFive />
      </Route>
      <Route path="/onboardingsix">
        <OnboardingSix />
      </Route>
      <Route path="/onboardingsixno">
        <OnboardingSixNo />
      </Route>
      <Route path="/onboardingseven">
        <OnboardingSeven />
      </Route>
      <Route path="/onboardingeight">
        <OnboardingEight />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>
      <Route exact path="/signup">
        <Redirect to="/" />
      </Route>
      <Route exact path="/signin">
        <Redirect to="/" />
      </Route>
    </Switch>
  </Router>
);

export default AuthenticatedApp;
