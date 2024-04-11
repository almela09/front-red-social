import "./Home.css";
import PostCard from "../../common/PostCard/PostCard";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../services/apiCalls";
export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const data = await getAllPosts(token);
        if (data && data.data) {
          setPosts(data.data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [token]);

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (posts.length === 0) {
    return <p>No hay posts disponibles.</p>;
  }

  return (
    <div className="home-design">
      <div className="card-design">
        {posts.map((post, index) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};
