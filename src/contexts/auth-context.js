import React, { useContext, createContext } from "react";
import * as AuthClient from "../utils/auth-client";
import { goHome } from "../utils/location";
import { useUser } from "./user-context";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [data] = useUser();

  const login = formData => {
    AuthClient.login(formData).then(() => goHome());
  };

  const register = formData => {
    AuthClient.register(formData).then(() => goHome());
  };

  const logout = () => {
    AuthClient.logout();
  };

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
