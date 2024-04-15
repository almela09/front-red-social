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
  const [title, setTitle] = useState("prueba");
  const [text, setText] = useState("prrrrueba");
  const [error, setError] = useState("");
  const token = useSelector((state) => state.user.token);
  // const token = localStorage.getItem('token');

  const handleDelete = async (postid) => {
    try {
      const result = await deletePost(token, postid);
      console.log(result); // Puedes hacer algo con el resultado o mostrar un mensaje
    } catch (error) {
      console.error("Error al borrar el post", error);
    }
    navigate("/profile");
  };

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
      <h1>Perfil del Usuario</h1>

      {userProfile ? (
        <div>
          <p>Nombre: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
        </div>
      ) : (
        <p>Cargando perfil...</p> //spinner
      )}
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
      <hr />
      <div>
        <p>New Post</p>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handlePost} className="post-link">
          Post it!
        </button>
      </div>
    </div>
  );
};

export default Profile;
