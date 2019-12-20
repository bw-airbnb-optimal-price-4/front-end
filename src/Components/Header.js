import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
      <div className="Nav">
        <h1 className="Logo">LOGO</h1>
        <div className="Nav-Links">
          <a href="">Home</a>
          <a href="">About Us</a>  
          <Link to="/">Sign In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    );
}