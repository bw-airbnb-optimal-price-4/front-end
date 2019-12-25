import React, { createContext } from "react";
import { StateProvider, useStateValue } from "react-conflux";
import reducer from "../reducers/user-reducer";

const userContext = createContext();

const UserProvider = ({ children, ...props }) => {
  return (
    <StateProvider
      reducer={reducer}
      stateContext={userContext}
      {...props}
    >
      {children}
    </StateProvider>
  );
};

const useUser = () => useStateValue(userContext);

export { UserProvider, useUser };
