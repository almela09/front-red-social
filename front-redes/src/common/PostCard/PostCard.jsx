import "./PostCard.css"
// import { Card, CardContent, Typography } from '@mui/material';
import {useNavigate} from "react-router-dom";
const PostCard = ({  post }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/post/${post._id}`)
}
return (
  <div className="box-design" onClick={handleClick}>
  <div className="cardcontent-design">
    <h5>{post.title}</h5>
    <p>{post.text}</p>
    <p>{post.author}</p>
    <button onClick={(e) => {
      e.stopPropagation(); // Esto evita que el evento del botón también active el evento del div padre
      navigate(`/post/${post._id}`);
    }} className="enter-post-button">
      Enter Post
    </button>
  </div>
</div>

  // <div className="box-design" onClick={handleClick}>
  //   <div className="cardcontent-design">
  //     <h5>{post.title}</h5>
  //     <p>{post.text}</p>
  //     <p>{post.author}</p>
  //     <button onClick={(e) => {
  //       e.stopPropagation(); // Esto evita que el evento del botón también active el evento del div padre
  //       navigate(`/post/${post._id}`);
  //     }} className="enter-post-button">
  //       Enter Post
  //     </button>
  //   </div>
  // </div>
);

};
export default PostCard;
