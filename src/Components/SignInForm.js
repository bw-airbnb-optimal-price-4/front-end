import React from "react";
import { useAuth } from "../contexts/auth-context";
import { CenteredLayout } from "../views/layouts";
import FormWithStyles from "./Form/FormWithStyles";
import InputWithStyles from "./Form/InputWithStyles";
import ButtonSubmit from "./Form/ButtonSubmit";
import LinkWithStyles from "./LinkWithStyles";
import useFormState from "../hooks/use-form-state";

const SignIn = ({ handleSubmit }) => {
  const { login } = useAuth();
  const [state, handleOnChange, handleOnSubmit] = useFormState(
    {
      email: { value: "", error: "" },
      password: { value: "", error: "" },
    },
    {
      email: { required: true, email: true },
      password: { required: true, min: 8 },
    },
    login,
  );

  return (
    <CenteredLayout>
      <h1>Welcome Back!</h1>
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
        <ButtonSubmit>Login</ButtonSubmit>
        <div>
          <span>New Here?&nbsp;</span>
          <LinkWithStyles to="/signup">
            Create an Account
          </LinkWithStyles>
        </div>
      </FormWithStyles>
    </CenteredLayout>
  );
};

export default SignIn;
