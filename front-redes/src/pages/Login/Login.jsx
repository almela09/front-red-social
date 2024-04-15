import "./Login.css";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../../services/apiCalls";
import { useDispatch } from "react-redux";
import { decodeToken } from "react-jwt";
import { setToken } from "../../app/slices/userSlice";

export const Login = () => {
  const navigate = useNavigate();
  //Instancia de Redux para escritura
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const Login = async (e) => {
    e.preventDefault();
    const fetched = await LoginUser(user);
    console.log(fetched);
    if (fetched.token) {
      const decodificado = decodeToken(fetched.token);
      dispatch(
        setToken({
          token: fetched.token,
          decodeToken: decodificado,
        })
      );

      setTimeout(() => {
        navigate("/");
      }, 500);
    }
  };
  return (
    <div className="login-home">
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
              value={user.email || ""}
              onChange={inputHandler}
              name="email"
            />
            <FaUser className="icon-user" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={user.password || ""}
              onChange={inputHandler} 
              name="password"
            />
            <FaLock className="icon-lock" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <button onClick={Login}>Login</button>{" "}
          {/* Se asume que loginMe maneja el proceso de login */}
          <div className="register-link">
            <p>
              Don't have an account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}