import "./Header.css";
import { CustomB } from "../CustomB/CustomB";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteToken } from "../../app/slices/userSlice"; 
import { decodeToken } from "react-jwt";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const token = useSelector((state) => state.user.token);
console.log(token)
const decodificado = decodeToken(token);
console.log(decodificado);
  const handleLogout = () => {
   
    dispatch(deleteToken());
    
  };

  return (
    <div className="header-design">
    <div className= "titlekawaii-design"></div>
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
          {decodificado && decodificado.roleName === 'super_admin' && (
                    <CustomB path="/admin" title="Admin" />
                )}
          <div onClick={handleLogout}>
          <CustomB path="/" title="Logout" />
          </div>
        </>
      )}
    </div>
  );
};
