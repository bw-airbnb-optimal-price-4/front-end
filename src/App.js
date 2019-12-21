import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import UnauthenticatedRouter from "./Routers/UnauthenticatedRouter";
import AuthenticatedRouter from "./Routers/AuthenticatedRouter";

function App() {
  return (
    <div className="App">
      <UnauthenticatedRouter />
      <AuthenticatedRouter />
      <Footer />
    </div>
  );
}

export default App;
