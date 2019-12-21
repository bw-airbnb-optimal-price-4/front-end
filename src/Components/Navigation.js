import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkTag = styled(Link)`
  margin-right: 15px;
  color: white;
  text-decoration: none;
`;

const Navigation = () => {
  return (
    <nav className="Nav">
      <div className="Nav-Links">
        <LinkTag to="/">Sign In</LinkTag>
        <LinkTag to="/signup">Sign Up</LinkTag>
      </div>
    </nav>
  );
};

export default Navigation;
