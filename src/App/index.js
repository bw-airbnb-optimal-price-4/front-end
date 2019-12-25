import React, { useEffect } from "react";
import * as AuthClient from "../utils/auth-client";
import { useUser } from "../contexts/user-context";
import { setUser, setPending } from "../reducers/user-reducer";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";
import { HalfCircleSpinner } from "react-epic-spinners";

const App = () => {
  const [{ user }, dispatch] = useUser();
  const token = AuthClient.getToken() || "";

  useEffect(() => {
    dispatch({ type: setPending });
    AuthClient.fetchUserFromToken(token)
      .then(user => {
        dispatch({ type: setUser, payload: user });
      })
      .catch(() => {
        dispatch({ type: setUser, payload: null });
      });
  }, []); // eslint-disable-line

  return user === "pending" ? (
    <HalfCircleSpinner color="#1FA9AB" />
  ) : user ? (
    <AuthenticatedApp />
  ) : (
    <UnauthenticatedApp />
  );
};

export default App;
