import React from "react";

export default function SignUpForm() {
    return (
       <form>
           <input placeholder="Full Name"
           id="name"
           type="text"
           name="name"
           />
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