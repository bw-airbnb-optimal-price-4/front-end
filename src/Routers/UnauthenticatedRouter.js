import React from "react";
import { Route } from "react-router-dom";
import SignInForm from "../Components/SignInForm";
import SignUpForm from "../Components/SignUpForm";

const UnauthenticatedRouter = () => (
  <>
    <Route exact path="/" component={SignInForm} />
    <Route exact path="/signup" component={SignUpForm} />
  </>
);

export default UnauthenticatedRouter;
