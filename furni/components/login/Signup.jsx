import React, {useState} from "react";
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [action, setAction] = useState("");
    const handleSignup = (e) => {
        e.preventDefault();
        // Save user data to localStorage (for demonstration purposes)
        localStorage.setItem("user", JSON.stringify({ username, email, password }));
        navigate("/login");
      };
    const Login = () => {
        setAction("active");
      };

  return (
    <div className={`wrapper${action}`}>
      
      <form onSubmit={handleSignup}>
          <h1>Signup</h1>
          <div className="input-box">
              <input type="text"  placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)} />
                <FaUser className="icon"/>
          </div>
          <div className="input-box">
                <input type="email" placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <IoMdMail className="icon"/>
          </div>
          <div className="input-box">
                <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <FaLock className="icon"/>
          </div>
                <div className="forgot">
                    <label><input type="checkbox" />I agree the terms&conditions </label>
                  </div>
                 <button type="submit">Signup</button>
           <div className="signup">
                <p> already have an account? <Link to="/Login" onClick={Login}>Login</Link>
 </p>
           </div>
      </form>
    </div>
  );
};

export default Signup;
