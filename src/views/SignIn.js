import React from "react";
import { CenteredLayout } from "./layouts";
import SignInForm from "../Components/SignInForm";

const SignInView = () => {
  const handleSignIn = () => {};

  return (
    <CenteredLayout>
      <SignInForm handleSubmit={handleSignIn} />
    </CenteredLayout>
  );
};

export default SignInView;
