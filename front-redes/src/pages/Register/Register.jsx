import "./Register.css"
import { FaUser, FaLock } from "react-icons/fa";

export const Register = () => {


  return (
    <div className= "register-home">
    <div className="wrapper">
      <form action="">
        <h1>Register</h1>
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

        <button type="submit">Register</button>
        <div className="register-link">
          <p>Have an account? <a href="#">Login</a></p>
        </div>
      </form>
    </div>
    </div>
  );
};
