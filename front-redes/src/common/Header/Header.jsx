
import "./Header.css";
import { CustomB } from "../CustomB/CustomB";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { deleteToken } from "../../app/slices/userSlice"; // Asegúrate de importar correctamente tus acciones

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 
  const token = useSelector(state => state.user.token);

  const handleLogout = () => {
    dispatch(deleteToken()); 
    navigate("/"); 
  }

  return (
    <div className="header-design">
      <CustomB path="/" title="Home" />
      <CustomB path="/register" title="Register" />
      <CustomB path="/login" title="Login" />
      
      
      {token && (<>
        <CustomB path="/logout" title="Logout" onClick={handleLogout} />
        <CustomB path="/profile" title="Profile"/>
        </>
        
      )}
    </div>
  );
};
