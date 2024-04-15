

import { getPost, putLike, removeLike } from "../../services/apiCalls";
import "./Post.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { decodeToken } from "react-jwt";

const Profile = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({ likes: 0, like: [] });
  const [liked, setLiked] = useState(false);
  const [error, setError] = useState("");
  const token = useSelector((state) => state.user.token);
  const { id } = useParams();

  const updateLikes = async (postid, action) => {
    try {
      const result = action === 'like' ? await putLike(token, postid) : await removeLike(token, postid);
      console.log(result); // Registra el resultado
      if (action === 'like') {
        setPost((prev) => ({ ...prev, likes: prev.likes + 1, like: [...prev.like, decodeToken(token).userId] }));
        setLiked(true);
      } else {
        setPost((prev) => ({ ...prev, likes: prev.likes - 1, like: prev.like.filter((userId) => userId !== decodeToken(token).userId) }));
        setLiked(false);
      }
    } catch (error) {
      console.error(`Error al manejar ${action}`, error);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      if (!token) {
        console.error("No hay token disponible");
        setError("No se encontró token de autenticación.");
        return;
      }
      try {
        const detail = await getPost(token, id);
        if (detail.data) {
          setPost({
            _id: detail.data._id,
            title: detail.data.title,
            text: detail.data.text,
            author: detail.data.author,
            date: detail.data.createdAt,
            likes: detail.data.like.length,
            like: detail.data.like,
          });
          setLiked(detail.data.like.includes(decodeToken(token).userId));
        } else {
          throw new Error("Fallo al cargar el post");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPost();
  }, [token, id]);

  return (
    <div className="profile-design">
      <div className="card-design">
        <h1>{post.title}</h1>
        <p>{post.text}</p>
        <p>Autor: {post.author}</p>
        <p>Creado: {post.date}</p>
        <p>Likes: {post.likes}</p>
        {liked ? (
          <button onClick={() => updateLikes(post._id, 'dislike')} className="put-like">
            Te gusta
          </button>
        ) : (
          <button onClick={() => updateLikes(post._id, 'like')} className="put-like">
            Dar like
          </button>
        )}
        <a href="/">Volver</a>
      </div>
    </div>
  );
};

export default Profile;