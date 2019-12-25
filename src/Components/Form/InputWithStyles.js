import React from "react";
import styled from "styled-components";

const InputStyling = styled.input`
  width: 30%;
  margin: 1% 12%;
`;

const InputWithStyles = ({
  id,
  name,
  placeholder,
  type,
  handleChange,
  ...props
}) => (
  <InputStyling
    type={type}
    id={id}
    name={name}
    placeholder={placeholder}
    onChange={handleChange}
    {...props}
  />
);

export default InputWithStyles;
