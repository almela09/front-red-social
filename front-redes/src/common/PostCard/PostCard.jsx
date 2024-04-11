import "./PostCard.css"
import { Card, CardContent, Typography } from '@mui/material';

const PostCard = ({ post }) => {
   
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5">{post.title}</Typography>
        <Typography paragraph>{post.text}</Typography>
        <Typography color="text.secondary">Author ID: {post.author}</Typography>
        <Typography color="text.secondary">Likes: {post.like.length}</Typography>
      </CardContent>
    </Card>
  );
};

export default PostCard;
