import React from "react";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";

const App = () => {
  return (
    <>
      <AuthenticatedApp />
      <UnauthenticatedApp />
    </>
  );
};

export default App;
