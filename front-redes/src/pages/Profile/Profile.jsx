import {
  getMyProfile,
  getMyPosts,
  deletePost,
  createPost,
} from "../../services/apiCalls";
import PostCard from "../../common/PostCard/PostCard";
import "./Profile.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
//
const Profile = () => {
  const navigate = useNavigate();
  const [userProfile, setProfile] = useState(null);
  const [myPosts, setmyPosts] = useState(null);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const token = useSelector((state) => state.user.token);
  // const token = localStorage.getItem('token');

  const handleDelete = async (postid) => {
    try {
      const result = await deletePost(token, postid);
      if (result && result.success) { // Asumiendo que la API devuelve un campo de éxito
        console.log("Post deleted:", result);
        // Actualizar el estado para eliminar el post de la lista
        setmyPosts(prevPosts => {
          return {
            data: prevPosts.data.filter(post => post._id !== postid)
          };
        });
      }
    } catch (error) {
      console.error("Error al borrar el post", error);
    }
  }
  const handlePost = async () => {
    try {
      const result = await createPost(token, { title, text });
      console.log(result);
      navigate(`/post/${result.data._id}`);
      // Actualiza la lista de posts con el nuevo post
      //setmyPosts(prev => ({ data: [result, ...prev.data] }));
    } catch (error) {
      console.error("Error al publicar el post", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getMyProfile(token);
        if (profileData.email) {
          setProfile({ name: profileData.name, email: profileData.email });
          const PostsData = await getMyPosts(token);
          if (1) {
            setmyPosts({ data: PostsData.data });
            console.log(myPosts.data);
          } else {
            throw new Error("Failed to load user profile");
          }
        } else {
          throw new Error("Failed to load user profile");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    if (token) {
      fetchProfile();
    } else {
      console.error("No token available");
      setError("No authentication token found.");
    }
  }, [token]);

  return (
    <div className="profile-design">
      <div className="title-design">Perfil del Usuario</div>
  
      <div className="posts-wrapper">
        <div className="input-group">
          {userProfile ? (
            <div>
              <p>Nombre: {userProfile.name}</p>
              <p>Email: {userProfile.email}</p>
            </div>
          ) : (
            <p>Cargando perfil...</p> //spinner
          )}
          <p>New Post</p>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title here"
          />
          <textarea
            className="block-text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your post..."
          />
          <button onClick={handlePost} className="post-link">
            Post it!
          </button>
        </div>
  
        <div className="card-design">
          {myPosts &&
            Array.isArray(myPosts.data) &&
            myPosts.data.map((post, index) => (
              <div key={post._id}>
                <PostCard post={post} />
                <button onClick={() => handleDelete(post._id)} className="delete-link">
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}  
export default Profile;
