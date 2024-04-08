import "./Login.css"
import { FaUser, FaLock } from "react-icons/fa";

export const Login = () => {


  return (
    <div className= "login-home">
    <div className="wrapper">
      <form action="">
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder='Email' required />
          <FaUser className="icon-user" />
        </div>
        <div className="input-box">
          <input type="password" placeholder='Password' required />
          <FaLock className="icon-lock" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit">Login</button>
        <div className="register-link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
    </div>
  );
};





