import "./Register.css"
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import { registerUserApi } from "../../services/apiCalls";
import { validame } from "../../utils/utils";
export const Register = () => {
  const navigate = useNavigate();

const [user, setUser] = useState({
  email: "",
  password: "",
});

const [userError, setUserError] = useState({
  emailError: "",
  passwordError: "",
});

const [msgError, setMsgError] = useState("");

const inputHandler = (e) => {
  setUser((prevState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));
};

const checkError = (e) => {
  const error = validame(e.target.name, e.target.value);

  setUserError((prevState) => ({
    ...prevState,
    [e.target.name + "Error"]: error,
  }));
};

const RegisterUser = async () => {
  try {
    for (let elemento in user) {
      if (user[elemento] === "") {
        throw new Error("Todos los campos tienen que estar rellenos");
      }
    }

    const fetched = await registerUserApi(user);

    console.log(fetched);
    setMsgError(fetched.message);

    setTimeout(() => {
      navigate("/");
    }, 1200);
  } catch (error) {
    setMsgError(error.message);
  }
};


  return (
    <div className="register-home">
    <div className="wrapper">
      <form action="" onSubmit={(e) => { e.preventDefault(); RegisterUser(); }}>
        <h1>Register</h1>

        <div className="input-box">
          <input
            className={`inputDesign ${userError.emailError !== "" ? "inputDesignError" : ""}`}
            type="email"
            placeholder="Email"
            name="email"
            value={user.email || ""}
            onChange={inputHandler}
            onBlur={checkError}
          />
          <FaUser className="icon-user" />
          <div className="error">{userError.emailError}</div>
        </div>

        <div className="input-box">
          <input
            className={`inputDesign ${userError.passwordError !== "" ? "inputDesignError" : ""}`}
            type="password"
            placeholder="Password"
            name="password"
            value={user.password || ""}
            onChange={inputHandler}
            onBlur={checkError}
          />
          <FaLock className="icon-lock" />
          <div className="error">{userError.passwordError}</div>
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button onClick={Register}>Register</button>
        <div className="error">{msgError}</div>

        <div className="register-link">
          <p>Have an account? <a href="#">Login</a></p>
        </div>
      </form>
    </div>
  </div>
    // <div className= "register-home">
    // <div className="wrapper">
    //   <form action="">
    //     <h1>Register</h1>
    //     <div className="input-box">
    //       <input type="text" placeholder='Email' required />
    //       <FaUser className="icon-user" />
    //     </div>
    //     <div className="input-box">
    //       <input type="password" placeholder='Password' required />
    //       <FaLock className="icon-lock" />
    //     </div>
    //     <div className="remember-forgot">
    //       <label>
    //         <input type="checkbox" /> Remember me
    //       </label>
    //       <a href="#">Forgot password?</a>
    //     </div>

    //     <button onClick={Register}>Register</button>
    //     <div className="register-link">
    //       <p>Have an account? <a href="#">Login</a></p>
    //     </div>
    //   </form>
    // </div>
    // </div>
  );
};
