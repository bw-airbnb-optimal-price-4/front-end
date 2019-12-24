import React, { useState } from "react";
import FormWithStyles from "./Form/FormWithStyles";
import InputWithStyles from "./Form/InputWithStyles";
import ButtonSubmit from "./Form/ButtonSubmit";
import LinkWithStyles from "./LinkWithStyles";

const SignUpForm = ({ handleSubmit }) => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    zipcode: "",
  });

  const handleChange = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h1>Create an account and start pricing today</h1>
      <FormWithStyles onSubmit={handleSubmit}>
        <InputWithStyles
          placeholder="Email"
          id="email"
          type="text"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
        <InputWithStyles
          placeholder="Password"
          id="password"
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />
        <InputWithStyles
          placeholder="ZipCode"
          id="zipcode"
          type="text"
          name="zipcode"
          value={formState.zipcode}
          onChange={handleChange}
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
