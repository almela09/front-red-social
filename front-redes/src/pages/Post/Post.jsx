import { getPost } from "../../services/apiCalls";
import PostCard from "../../common/PostCard/PostCard";
import "./Post.css";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// 
const Profile = () => {
    const navigate = useNavigate();
    const [postDetail, setPostDetail] = useState(null);
    const [Post, setPost] = useState(null);
    const [error, setError] = useState('');
    const token = useSelector((state) => state.user.token);
    const { id } = useParams();
    // const token = localStorage.getItem('token');
    
    /*const handleDelete = async (postid) => {
        try {
          const result = await deletePost(token, postid);
          console.log(result); // Puedes hacer algo con el resultado o mostrar un mensaje
        } catch (error) {
          console.error("Error al borrar el post", error);
        }
    }*/

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const detail = await getPost(token, id);
                console.log(detail);
                if (detail.title) {
                    setPostDetail({ title : detail.title, text: detail.text });
                    console.log(postDetail);
                } else {
                    throw new Error('Failed to load post');
                }
            } catch (error) {
                setError(error.message);
            }
        };

        if (token) {
            console.log("hola?")
            fetchPost();
        } else {
            console.error("No token available");
            setError("No authentication token found.");
        }
    }, [token]); 

    return (
        <div className="profile-design">
<div className="card-design">
      {/* <PostCard post={postDetail} /> */}
</div>
        </div>
    );
};

export default Profile;