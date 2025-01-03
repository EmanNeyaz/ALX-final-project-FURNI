import { useState } from 'react';
import React from "react";
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
   const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();   
  const [action, setAction] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    // Retrieve user data from localStorage (for demonstration purposes)
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.username === username && user.password === password) {
      alert("Login successful!");
      navigate("/"); // Redirect to home page or any other page
    } else {
      alert("Invalid username or password");
    }
  };

  const Signup = () => {
    setAction("active");
  };
  return (
    <div className={`wrapper${action}`}>
      
      <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
              <input type="text"  placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                <FaUser className="icon"/>
          </div>
          <div className="input-box">
                <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}  />
                <FaLock className="icon"/>
          </div>
                <div className="forgot">
                    <label><input type="checkbox" />Remember me </label>
                   <a href="#">Forgot password?</a>
                  </div>
                 <button type="submit">Login</button>
           <div className="signup">
                <p> Don't have an account? <Link to="/signup" onClick={Signup}>Sign up</Link>  </p>
           </div>
      </form>
    </div>
  );
};

export default Login;
