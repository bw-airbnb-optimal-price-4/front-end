import React from "react";
import { useAuth } from "../contexts/auth-context";
import { goHome } from "../utils/location";

const Logout = () => {
  const { logout } = useAuth();

  logout();

  goHome();

  return <></>;
};

export default Logout;
