import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthenticatedRouter from "../Routers/AuthenticatedRouter";

const AuthenticatedApp = () => (
  <Router>
    <AuthenticatedRouter />
  </Router>
);

export default AuthenticatedApp;
