import "./Header.css";
import { CustomB } from "../CustomB/CustomB";
export const Header = () => {
  return <div className= " header-design">
    <CustomB
    path= "/"
    title= "Home"
    
    />
    <CustomB
    path= "/register"
    title= "Register"
    
    />
    <CustomB
    path= "/login"
    title= "Login"
    
    />
    

    </div>;
};
