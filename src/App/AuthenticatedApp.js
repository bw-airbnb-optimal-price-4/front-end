import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";
import { Onboarding } from "../Components/Onboarding/Onboarding";
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
