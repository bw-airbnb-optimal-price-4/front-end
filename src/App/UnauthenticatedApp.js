import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";
import { SignIn } from "../views";
import SignUpForm from "../Components/SignUpForm";

const UnauthenticatedApp = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/signin" />
      </Route>
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/signup">
        <SignUpForm />
      </Route>
    </Switch>
  </Router>
);

export default UnauthenticatedApp;
