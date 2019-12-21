import React from "react";
import FormWithStyles from "./Form/FormWithStyles";
import InputWithStyles from "./Form/InputWithStyles";
import ButtonSubmit from "./Form/ButtonSubmit";
import LinkWithStyles from "./LinkWithStyles";

const SignIn = () => {
  return (
    <div>
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
          <LinkWithStyles to="/signup">
            Create an Account
          </LinkWithStyles>
        </div>
      </FormWithStyles>
    </div>
  );
};

export default SignIn;
