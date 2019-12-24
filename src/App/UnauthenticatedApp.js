import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { SignUp, SignIn } from "../views";

const UnauthenticatedApp = () => (
  <Router>
    <Route exact path="/" component={SignIn} />
    <Route exact path="/signup" component={SignUp} />
  </Router>
);

export default UnauthenticatedApp;
