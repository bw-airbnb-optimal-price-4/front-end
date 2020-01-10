import { jwtDecode } from "jwt-js-decode";
import Axios from "axios";

const localStorageKey = "auth_token";
const axiosConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
};

export const getToken = () => {
  const token = JSON.parse(localStorage.getItem(localStorageKey));

  return token;
};

export const handleUserResponse = async token => {
  console.log(token)
  localStorage.setItem("auth_token", JSON.stringify(token));

  return token;
};

export const fetchUserFromToken = async token => {
  const jwt = jwtDecode(token);

  const config = {
    ...axiosConfig,
    method: "get",
    url: `restricted/users/${jwt.payload.subject}`,
    headers: {

      "Content-Type": "application/json",
      "token": `${token}`,
    },
  };

  const { data } = await Axios(config);

  return { token, ...data };
};

export const login = form => {
  const config = {
    ...axiosConfig,
    method: "post",
    url: "auth/login",
    data: JSON.stringify(form),
  };

  return Axios(config)
    .then(({ data }) => handleUserResponse(data.token))
    .catch(console.error);
};

export const register = form => {
  const config = {
    ...axiosConfig,
    method: "post",
    url: "auth/register",
    data: JSON.stringify(form),
  };

  return Axios(config)
    .then(({ data }) => handleUserResponse(data.token))
    .catch(console.error);
};

export const logout = () => {
  localStorage.removeItem("auth_token");
};
