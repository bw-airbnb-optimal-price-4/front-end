import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";
import Onboarding from "../Components/Onboarding/Onboarding";
import OnboardingTwo from "../Components/Onboarding/OnboardingTwo";
import Logout from "../Components/Logout";

const AuthenticatedApp = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => "To Dashboard"} />
      <Route path="/onboarding">
        <Onboarding />
      </Route>
      <Route path="/onboardingtwo">
        <OnboardingTwo />
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
