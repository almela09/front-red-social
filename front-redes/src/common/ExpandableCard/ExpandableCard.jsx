// import React, { useState, useEffect } from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Collapse from "@mui/material/Collapse";
// import { getAllPosts } from "../../services/apiCalls";
// import { useSelector } from "react-redux";

// const ExpandableCard = () => {
//   const [expanded, setExpanded] = useState(false);
//   const [posts, setPosts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const token = useSelector((state) => state.user.token); //IMPORTANTE, PAULA USA EL SLICE QUE TOCA, GRACIAS, DE NADA.
//   useEffect(() => {
//     console.log(token);
//     const fetchPosts = async () => {
//       setIsLoading(true);
//       try {
//         const data = await getAllPosts(token);
//         if (data && data.data) {
//           setPosts(data.data);
//         }
//       } catch (error) {
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardActions>
//         <Button size="small" onClick={handleExpandClick}>
//           {expanded ? "Less" : "More"}
//         </Button>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           {isLoading ? (
//             <Typography paragraph>Loading posts...</Typography>
//           ) : posts.length > 0 ? (
//             posts.map((post) => (
//               <Typography paragraph key={post._id}>
//                 <strong>Title:</strong> {post.title}
//                 <br />
//                 <strong>Text:</strong> {post.text}
//                 <br />
//                 <strong>Author ID:</strong> {post.author}
//                 <br />
//                 <strong>Likes:</strong> {post.like.length}
//               </Typography>
//             ))
//           ) : (
//             <Typography paragraph>No posts available.</Typography>
//           )}
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// };
//  export default ExpandableCard

// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Card, CardContent, Typography } from "@mui/material";

// const ExpandableCard = () => {
//   const [posts, setPosts] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const token = useSelector((state) => state.user.token);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setIsLoading(true);
//       try {
//         const data = await getAllPosts(token);
//         if (data && data.data) {
//           setPosts(data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchPosts();
//   }, [token]);

//   if (isLoading) {
//     return <Typography>Loading posts...</Typography>;
//   }

//   if (posts.length === 0) {
//     return <Typography>No posts available.</Typography>;
//   }

//   return (
//     <div>
//       {/* {posts.map((post) => (
//         <Card key={post._id} sx={{ maxWidth: 345, marginBottom: 2 }}> */}
//       <CardContent>
//         <Typography variant="h5">{title}</Typography>
//         <Typography paragraph>{text}</Typography>
//         <Typography color="text.secondary">Author ID: {author}</Typography>
//       </CardContent>
//       {/* </Card> */}
//     </div>
//   );
// };

// export default ExpandableCard;
