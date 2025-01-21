import React from "react";
import { useNavigate } from "react-router-dom";
// import App from "./scenes/App";

function Login() {
const Navigate = useNavigate();

function handleSubmit(event) {
    event.preventDefault(); 
    Navigate('/all');
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </div>
  );
}

export default Login;