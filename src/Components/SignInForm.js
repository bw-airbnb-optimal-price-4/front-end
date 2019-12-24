import React, { useState } from "react";
import FormWithStyles from "./Form/FormWithStyles";
import InputWithStyles from "./Form/InputWithStyles";
import ButtonSubmit from "./Form/ButtonSubmit";
import LinkWithStyles from "./LinkWithStyles";

const SignIn = ({ handleSubmit }) => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h1>Welcome Back!</h1>
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
        <ButtonSubmit>Login</ButtonSubmit>
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
