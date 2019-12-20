import React from "react";

export default function SignIn() {
    return (
        <form>
           <input placeholder="Email"
           id="email"
           type="text"
           name="email"
           />
           <input placeholder="Password" 
           id="password"
           type="password"
           name="password"
           />
       </form> 
    )
}