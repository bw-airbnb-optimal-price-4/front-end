import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";
import SignUpForm from "../Components/SignUpForm";
import SignInForm from "../Components/SignInForm";

const UnauthenticatedApp = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/signin" />
      </Route>
      <Route exact path="/signin">
        <SignInForm />
      </Route>
      <Route exact path="/signup">
        <SignUpForm />
      </Route>
    </Switch>
  </Router>
);

export default UnauthenticatedApp;
