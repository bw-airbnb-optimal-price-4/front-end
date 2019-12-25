import React from "react";
import styled from "styled-components";

const FormStyling = styled.form`
  display: block;
  align-content: center;
  padding-bottom: 10px;
  margin: 8%;
`;

const FormWithStyles = ({ handleSubmit, children, ...props }) => (
  <FormStyling onSubmit={handleSubmit} {...props}>
    {children}
  </FormStyling>
);

export default FormWithStyles;
