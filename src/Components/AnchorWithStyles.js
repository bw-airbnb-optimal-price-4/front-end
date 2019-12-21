import React from "react";
import styled from "styled-components";

const AnchorStyling = styled.a`
  text-decoration: none;
  color: #1fa9ab;
`;

const AnchorWithStyles = ({ href = "#", children, ...props }) => (
  <AnchorStyling href={href} {...props}>
    {children}
  </AnchorStyling>
);

export default AnchorWithStyles;
