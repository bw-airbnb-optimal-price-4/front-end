import React from "react";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";

const App = () => {
  const user = false;

  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default App;
