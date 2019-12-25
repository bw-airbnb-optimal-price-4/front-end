import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useUser } from "../contexts/user-context";

const LinkTag = styled(Link)`
  margin-right: 15px;
  color: white;
  text-decoration: none;
`;

const Navigation = () => {
  const [{ user }] = useUser();

  return (
    <nav className="Nav">
      <div className="Nav-Links">
        {user ? (
          <LinkTag to="/logout">Logout</LinkTag>
        ) : (
          <>
            <LinkTag to="/signin">Sign In</LinkTag>
            <LinkTag to="/signup">Sign Up</LinkTag>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
