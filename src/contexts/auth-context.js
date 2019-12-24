import React, { useContext, createContext } from "react";
import {
  useLocalStorage,
  useHttpRequest,
} from "@jasonsbarr/custom-hooks";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const data = { user: null };
  const login = () => {};
  const register = () => {};
  const logout = () => {};

  return (
    <AuthContext.Provider value={{ data, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("Auth can only be used inside Auth Context");
  }

  return context;
};

export { AuthProvider, useAuth };
