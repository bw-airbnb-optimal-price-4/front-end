import React from "react";
import "./App.css";
import Footer from "../Components/Footer";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";

function App() {
  return (
    <div className="App">
      <AuthenticatedApp />
      <UnauthenticatedApp />
    </div>
  );
}

export default App;
