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
  localStorage.setItem("auth_token", JSON.stringify(token));

  return token;
};

export const fetchUserFromToken = async token => {
  const jwt = jwtDecode(token);

  const config = {
    ...axiosConfig,
    method: "get",
    url: `/users/${jwt.payload.sub}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await Axios(config);

  return { token, ...data };
};

export const register = form => {
  const config = {
    ...axiosConfig,
    method: "post",
    url: "/auth/register",
    data: JSON.stringify(form),
  };

  return Axios(config)
    .then(({ data }) => handleUserResponse(data.accessToken))
    .catch(console.error);
};

export const logout = () => {
  localStorage.removeItem("auth_token");
};
