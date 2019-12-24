import React, { createContext } from "react";
import { StateProvider, useStateValue } from "react-conflux";
import {
  useLocalStorage,
  useHttpRequest,
} from "@jasonsbarr/custom-hooks";
import { makeReducer } from "@jasonsbarr/reducer-utils";

const AuthContext = createContext();

const login = () => {};
const register = () => {};
const logout = () => {};

const initialState = {
  data: { user: null },
  login,
  register,
  logout,
};

const reducer = makeReducer(
  {
    SET_AUTH: (state, payload) => ({ ...state, data: payload }),
  },
  initialState,
);

const AuthProvider = ({ children }) => {
  return (
    <StateProvider reducer={reducer} stateContext={AuthContext}>
      {children}
    </StateProvider>
  );
};

const useAuth = useStateValue(AuthContext);

export { AuthProvider, useAuth };
