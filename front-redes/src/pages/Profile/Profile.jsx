import { getMyProfile, getMyPosts, deletePost } from "../../services/apiCalls";
import PostCard from "../../common/PostCard/PostCard";
import "./Profile.css";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import React, { useState, useEffect } from 'react';
// 
const Profile = () => {
    const navigate = useNavigate();
    const [userProfile, setProfile] = useState(null);
    const [myPosts, setmyPosts] = useState(null);
    const [error, setError] = useState('');
    const token = useSelector((state) => state.user.token);
    // const token = localStorage.getItem('token');
    
    const handleDelete = async (postid) => {
        try {
          const result = await deletePost(token, postid);
          console.log(result); // Puedes hacer algo con el resultado o mostrar un mensaje
        } catch (error) {
          console.error("Error al borrar el post", error);
        }
    }

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profileData = await getMyProfile(token);
                if (profileData.email) {
                    setProfile({ username : 'aaaa', email: profileData.email });
                    const PostsData = await getMyPosts(token);
                    if (1) {
                        setmyPosts({'data' : PostsData.data});
                        console.log(myPosts.data);
                    } else {
                        throw new Error('Failed to load user profile');
                    }
                } else {
                    throw new Error('Failed to load user profile');
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
            {error && <p>Error: {error}</p>}
            {userProfile ? (
                <div>
                    <p>Nombre: {userProfile.username}</p>
                    <p>Email: {userProfile.email}</p>  
                </div>
                
            ) : (
                <p>Cargando perfil...</p>
            )}
<div className="card-design">
  {myPosts && Array.isArray(myPosts.data) && myPosts.data.map((post, index) => (
    <div key={post._id}>
      <PostCard post={post} />
      <a onClick={() => handleDelete(post._id)} className="delete-link">Delete</a>
    </div>
  ))}
</div>



        </div>
    );
};

export default Profile;