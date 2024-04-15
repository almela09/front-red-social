import "./PostCard.css"
// import { Card, CardContent, Typography } from '@mui/material';
import {useNavigate} from "react-router-dom";
const PostCard = ({ post }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/post/${post._id}`);
  }

  return (
    <div className="box-design" onClick={handleClick}>
      <div className="cardcontent-design">
        <h5>{post.title}</h5>
        <p>{post.text}</p>
        <p>{post.author}</p>
      </div>
    </div>
  );
}

export default PostCard;
