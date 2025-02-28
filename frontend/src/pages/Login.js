import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../api/authApi";
import { loginSuccess } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css"; // Ensure this file is styled correctly

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({ email, password });
      dispatch(loginSuccess(data));
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">SignUp</a></p>
    </div>
  );
};

export default Login;
