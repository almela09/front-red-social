// const url = 'https://backend-api-ii-redes-sociales-dev-fnbs.2.ie-1.fl0.io/api/'
const url = 'http://localhost:4000/api/'
export const registerUserApi = async (user) => {
  try {
    const response = await fetch(`${url}auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    /*if (!data.success) {
      throw new Error(data.message);
    }*/
    return data;
  } catch (error) {
    console.log("Error al registrar el usuario", error);
    throw error;
  }
};
export const LoginUser = async (user) => {
  try {
    const response = await fetch(`${url}auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
    const data = await response.json()
    /*if (!data.success) {
      throw new Error(data.message)
    }*/
    return data
  } catch (error) {
    console.log("Error al loguear el usuario", error)
    throw error
  }

}
export const getAllPosts = async (token) => {
  try {
    const response = await fetch(`${url}posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    const data = await response.json();
    /*if (!data.success) {
      throw new Error(data.message);
    }*/
    return data;
  } catch (error) {
    console.log("Error al recibir los posts", error);
    throw error;
  }
};

export const getMyPosts = async (token) => {
  try {
    const response = await fetch(`${url}posts/own`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error al recibir los posts", error);
    throw error;
  }
};

export const deletePost = async (token, postid) => {
  try {
    const response = await fetch(`${url}posts/${postid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error al borrar el post", error);
    throw error;
  }
};

export const getPost = async (token, postid) => {
  try {
    console.log(postid)
    const response = await fetch(`${url}posts/${postid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log("Error al obtener el post", error);
    throw error;
  }
};

//router.put('/like/:id', auth, putLikes); 
export const putLike = async (token, postid) => {
  try {
    const response = await fetch(`${url}posts/like/${postid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log("Error al obtener el post", error);
    throw error;
  }
};

export const removeLike = async (token, postid) => {
  try {
    const response = await fetch(`${url}posts/like/${postid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log("Error al obtener el post", error);
    throw error;
  }
};

export const createPost = async (token, postData) => {
  try {
    console.log(JSON.stringify(postData));
    const response = await fetch(`${url}posts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(postData)
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error al crear el post", error);
    throw error;
  }
};

export const getMyProfile = async (token) => {
  try {
    const response = await fetch(`${url}users/profile`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    const data = await response.json()
    /*if (!data.success) {
      throw new Error(data.message)
    }*/
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
};

export const getAllUsers = async (token) => {

  const response = await fetch(`${url}users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error al obtener usuarios');
  }
  return response.json();
}

//router.delete('/:id', auth, deletePost);  

export const updateProfile = async (userId, userData, token) =>{
  try {
    const response = await fetch(`${url}/${userId}`, {
        method: 'PUT', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        },
        body: JSON.stringify(userData) 
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Unable to update user profile');
    }
    return await response.json(); 
} catch (error) {
    console.error('Error updating user profile:', error);
    throw error; 
}
}