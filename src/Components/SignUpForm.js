import React from "react";
import useFormState from "../hooks/use-form-state";
import { useAuth } from "../contexts/auth-context";
import { CenteredLayout } from "../views/layouts";
import FormWithStyles from "./Form/FormWithStyles";
import InputWithStyles from "./Form/InputWithStyles";
import ButtonSubmit from "./Form/ButtonSubmit";
import LinkWithStyles from "./LinkWithStyles";
import styled from "styled-components";

const StyledHeading = styled.h1`
  text-align: center;
  margin: 5% 0% -5%;
`;

const SignUpForm = () => {
  const { register } = useAuth();
  const [state, handleOnChange, handleOnSubmit] = useFormState(
    {
      email: { value: "", error: "" },
      password: { value: "", error: "" },
      zipcode: { value: "", error: "" },
    },
    {
      email: { required: true, email: true },
      password: { required: true, min: 8 },
      zipcode: { required: true, min: 5, max: 5 },
    },
    register,
  );

  return (
    <CenteredLayout>
      <StyledHeading>Create an account and start pricing today</StyledHeading>
      <FormWithStyles onSubmit={handleOnSubmit}>
        {state.email.error && (
          <p style={{ color: "red" }}>{state.email.error}</p>
        )}
        <InputWithStyles
          placeholder="Email"
          id="email"
          type="text"
          name="email"
          value={state.email.value}
          onChange={handleOnChange}
        />
        {state.password.error && (
          <p style={{ color: "red" }}>{state.password.error}</p>
        )}
        <InputWithStyles
          placeholder="Password"
          id="password"
          type="password"
          name="password"
          value={state.password.value}
          onChange={handleOnChange}
        />
        {state.zipcode.error && (
          <p style={{ color: "red" }}>{state.zipcode.error}</p>
        )}
        <InputWithStyles
          placeholder="ZipCode"
          id="zipcode"
          type="number"
          name="zipcode"
          value={state.zipcode.value}
          onChange={handleOnChange}
        />
        <ButtonSubmit type="submit">Create Account</ButtonSubmit>
        <div>
          <span>Already have an account?&nbsp;</span>
          <LinkWithStyles to="/">Login here</LinkWithStyles>
        </div>
      </FormWithStyles>
    </CenteredLayout>
  );
};

export default SignUpForm;
