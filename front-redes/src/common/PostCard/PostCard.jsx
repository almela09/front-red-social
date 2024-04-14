import "./PostCard.css"
// import { Card, CardContent, Typography } from '@mui/material';

const PostCard = ({ post }) => {
   
  return (
    <div className="box-design">
        <div className="cardcontent-design">
            <h5><a href={`/post/${post._id}`}>{post.title}</a></h5>
            <p>{post.text}</p>
            <p>{post.author}</p>
        </div>
    {/* <Card className="box-design" sx={{ maxWidth: 345, marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography paragraph>{post.text}</Typography>
        <Typography color="text.secondary">Author ID: {post.author}</Typography>
        <Typography color="text.secondary">Likes: {post.like.length}</Typography>
      </CardContent>
    </Card> */}
    </div>
  );
};

export default PostCard;
