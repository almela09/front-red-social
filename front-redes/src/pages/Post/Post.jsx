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
    const [post, setPost] = useState('');
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
                if (detail.data) {
                    setPost({title:detail.data.title, text : detail.data.text, author:detail.data.author, date:detail.data.createdAt,
                        likes:detail.data.like.length
                    })
                } else {
                    throw new Error('Failed to load post');
                }
            } catch (error) {
                setError(error.message);
            }
        };

        if (token) {
            fetchPost();
        } else {
            console.error("No token available");
            setError("No authentication token found.");
        }
    }, [token]); 

    return (
        <div className="profile-design">
<div className="card-design">
<h1>{post.title}</h1>
<p>{post.text}</p>
<p>Autor: {post.author}</p>
<p>Creado: {post.date}</p>
<p>Likes: {post.likes}</p>
<a href="/">Volver</a>
</div>
        </div>
    );
};

export default Profile;