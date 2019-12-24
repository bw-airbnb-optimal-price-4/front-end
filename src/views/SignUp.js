import React from "react";
import { CenteredLayout } from "./layouts";
import SignUpForm from "../Components/SignUpForm";

const SignUpView = () => {
  const handleSignUp = () => {};

  return (
    <CenteredLayout>
      <SignUpForm handleSubmit={handleSignUp} />
    </CenteredLayout>
  );
};

export default SignUpView;
