import React from "react";
import styled from "styled-components";
import DefaultLayout from "./DefaultLayout";

const Centered = styled(DefaultLayout)`
  text-align: center;
`;

const CenteredLayout = ({ children, ...props }) => (
  <Centered {...props}>{children}</Centered>
);

export default CenteredLayout;
