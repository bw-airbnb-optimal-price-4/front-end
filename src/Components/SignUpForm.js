import React from "react";
import styled from "styled-components";

const FormStyling = styled.form`
    display: block;
    align-content: center;
    padding-bottom: 10px;
    margin: 3%;
`;

const InputStyling = styled.input`
    width: 30%;
    margin: 1% 12%;
`;


export default function SignUpForm() {
    return (
       <FormStyling>
           <InputStyling placeholder="Full Name"
           id="name"
           type="text"
           name="name"
           />
           <InputStyling placeholder="Email"
           id="email"
           type="text"
           name="email"
           />
           <InputStyling placeholder="Password" 
           id="password"
           type="password"
           name="password"
           />
       </FormStyling> 
    )
}