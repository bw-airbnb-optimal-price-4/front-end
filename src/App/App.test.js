import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from ".";

test("should render without crashing", () => {
  const div = document.createElement("div");

  div.setAttribute("id", "root");
  document.body.appendChild(div);

  render(<App />, div);

  cleanup();
});
