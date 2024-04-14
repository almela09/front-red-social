import "./Header.css";
import { CustomB } from "../CustomB/CustomB";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteToken } from "../../app/slices/userSlice"; 

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.user.token);
console.log(token)
  const handleLogout = () => {
   
    dispatch(deleteToken());
    
  };

  return (
    <div className="header-design">
      <CustomB path="/" title="Home" />
      

      {!token && (
        <>
          <CustomB path="/register" title="Register" />
          <CustomB path="/login" title="Login" />
        </>
      )}

      {token && (
        <>
          <CustomB path="/profile" title="Profile" />
          <div onClick={handleLogout}>
          <CustomB path="/" title="Logout" />
          </div>
        </>
      )}
    </div>
  );
};
