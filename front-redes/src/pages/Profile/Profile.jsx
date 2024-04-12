import { getMyProfile, getMyPosts } from "../../services/apiCalls";
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

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profileData = await getMyProfile(token);
                if (profileData.email) {
                    setProfile({ username : 'aaaa', email: profileData.email });
                    const PostsData = await getMyPosts(token);
                    if (1) {
                        setmyPosts(PostsData.data);
                        console.log(PostsData.data);
                        console.log(myPosts);
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
        </div>
    );
};

export default Profile;