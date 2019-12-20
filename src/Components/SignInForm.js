import React from "react";
import styled from "styled-components";

const FormStyling = styled.form`
    display: block;
    align-content: center;
    padding-bottom: 10px;
    margin: 8%;
`;

const InputStyling = styled.input`
    width: 30%;
    margin: 1% 12%;
`;

const ButtonStyling = styled.button`
    border-radius: 6px;
    border: none;
    width: 15%;
    height: 30px;
    margin: 3% 25%;
    color: white;
    background-color: #19BD60;
`;

const AnchorStyling = styled.a`
  text-decoration: none;
  color: #1FA9AB;
`;

export default function SignIn() {
    return (
        <FormStyling>
           <h1>Welcome Back!</h1>
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
           <ButtonStyling type="submit">
               Login
           </ButtonStyling>
           <div>
             <span>New Here?</span>
             <AnchorStyling href=""> Create an Account</AnchorStyling>
           </div>
       </FormStyling> 
    )
}