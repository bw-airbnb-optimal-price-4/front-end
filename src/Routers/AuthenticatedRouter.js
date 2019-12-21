import React from "react";
import { Route } from "react-router-dom";
import Onboarding from "../Components/Onboarding/Onboarding";
import OnboardingTwo from "../Components/Onboarding/OnboardingTwo";

const AuthenticatedRouter = () => (
  <>
    <Route exact path="/onboarding" component={Onboarding} />
    <Route exact path="/onboardingtwo" component={OnboardingTwo} />
  </>
);

export default AuthenticatedRouter;
