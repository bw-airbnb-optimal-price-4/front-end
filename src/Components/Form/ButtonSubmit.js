import React from "react";
import styled from "styled-components";

const ButtonStyling = styled.button`
  border-radius: 6px;
  border: none;
  width: 15%;
  height: 30px;
  margin: 3% 25%;
  color: white;
  background-color: #19bd60;
`;

const ButtonSubmit = () => (
  <ButtonStyling type="submit">Login</ButtonStyling>
);

export default ButtonSubmit;
