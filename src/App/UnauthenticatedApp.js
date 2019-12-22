import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import UnauthenticatedRouter from "../Routers/UnauthenticatedRouter";

const UnauthenticatedApp = () => (
  <Router>
    <UnauthenticatedRouter />
  </Router>
);

export default UnauthenticatedApp;
