import { makeReducer } from "@jasonsbarr/reducer-utils";

export const setUser = "SET_USER";
export const setPending = "SET_PENDING";

const SET_USER = (state, { payload: user }) => ({ ...state, user });

const SET_PENDING = state => ({ ...state, user: "pending" });

export default makeReducer(
  {
    SET_USER,
    SET_PENDING,
  },
  { user: null },
);
