import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { useHttpRequest } from "@jasonsbarr/custom-hooks";

const HookTest = () => {
  const [render, handleRequest] = useHttpRequest({
    initialState: "This is the initial state",
    pendingState: "Loading...",
    config: {
      baseURL: "https://jsonplaceholder.typicode.com",
    },
  });

  return render({
    // do this to fire the request in response to an event
    initial: () => (
      <button
        onClick={() =>
          handleRequest("/posts?_limit=10", {
            config: { method: "get" },
          })
        }
      >
        Request
      </button>
    ),
    pending: () => "Loading...",
    error: err => JSON.stringify(err),
    success: data => JSON.stringify(data),
  });
};

ReactDOM.render(
  <Router>
    <HookTest />
  </Router>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
