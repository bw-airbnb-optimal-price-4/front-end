import React from "react";
import Navigation from "./Navigation";
import FormWithStyles from "./Form/FormWithStyles";
import InputWithStyles from "./Form/InputWithStyles";
import ButtonSubmit from "./Form/ButtonSubmit";
import AnchorWithStyles from "./AnchorWithStyles";

export default function SignUpForm() {
  return (
    <div>
      <Navigation />
      <FormWithStyles>
        <h1>
          Create an account and
          <br />
          start pricing today.
        </h1>
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
          <span>Already have an account?</span>
          <AnchorWithStyles href=""> Login here</AnchorWithStyles>
        </div>
      </FormWithStyles>
    </div>
  );
}
