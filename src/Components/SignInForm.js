import React from "react";
import Navigation from "./Navigation";
import FormWithStyles from "./Form/FormWithStyles";
import InputWithStyles from "./Form/InputWithStyles";
import ButtonSubmit from "./Form/ButtonSubmit";
import AnchorWithStyles from "./AnchorWithStyles";

const SignIn = () => {
  return (
    <div>
      <Navigation />
      <h1>Welcome Back!</h1>
      <FormWithStyles>
        <InputWithStyles
          placeholder="Email"
          id="email"
          type="text"
          name="email"
        />
        <InputWithStyles
          placeholder="Password"
          id="password"
          type="password"
          name="password"
        />
        <ButtonSubmit />
        <div>
          <span>New Here?&nbsp;</span>
          <AnchorWithStyles href="">
            Create an Account
          </AnchorWithStyles>
        </div>
      </FormWithStyles>
    </div>
  );
};

export default SignIn;
