import React from "react";
import FormWithStyles from "./Form/FormWithStyles";
import InputWithStyles from "./Form/InputWithStyles";
import ButtonSubmit from "./Form/ButtonSubmit";
import LinkWithStyles from "./LinkWithStyles";

const SignUpForm = () => {
  return (
    <div>
      <h1>Create an account and start pricing today</h1>
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
        <InputWithStyles
          placeholder="ZipCode"
          id="zipcode"
          type="text"
          name="zipcode"
        />
        <ButtonSubmit type="submit">Create Account</ButtonSubmit>
        <div>
          <span>Already have an account?&nbsp;</span>
          <LinkWithStyles to="/">Login here</LinkWithStyles>
        </div>
      </FormWithStyles>
    </div>
  );
};

export default SignUpForm;
