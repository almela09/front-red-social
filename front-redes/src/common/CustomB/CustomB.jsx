import "./CustomB.css";
import { useNavigate } from "react-router-dom";

export const CustomB = ({ path, title }) => {
  const navigate = useNavigate();

  return <div className= "customlink-design"onClick={() => navigate(path)}>{title}</div>;
};
