import React from "react";
import { Route } from "react-router-dom";
import { SignUp, SignIn } from "../views";

const UnauthenticatedRouter = () => (
  <>
    <Route exact path="/" component={SignIn} />
    <Route exact path="/signup" component={SignUp} />
  </>
);

export default UnauthenticatedRouter;
