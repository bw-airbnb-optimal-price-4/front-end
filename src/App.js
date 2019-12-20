import React from "react";
import "./App.css";
import Navigation from "./Components/Header";
import SignInForm from "./Components/SignInForm";
import SignUpForm from "./Components/SignUpForm";
import Footer from "./Components/Footer";
import { Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route exact path="/" component={SignInForm}/>
      <Route exact path="/signup" component={SignUpForm}/>
      <Footer/>
    </div>    
  );
}

export default App;
