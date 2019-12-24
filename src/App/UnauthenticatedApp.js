import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { SignIn } from "../views";
import SignUpForm from "../Components/SignUpForm";

const UnauthenticatedApp = () => (
  <Router>
    <Route exact path="/" component={SignIn} />
    <Route exact path="/signup" component={SignUpForm} />
  </Router>
);

export default UnauthenticatedApp;
