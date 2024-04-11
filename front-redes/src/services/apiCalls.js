const url= 'https://backend-api-ii-redes-sociales-dev-fnbs.2.ie-1.fl0.io/api/'

export const registerUserApi = async (user) => {
  try {
    const response = await fetch(`${url}auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    if (!data.success) {
      throw new Error(data.message);
    }
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
        if (!data.success) {
          throw new Error(data.message)
        }
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
    if (!data.success) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    console.log("Error al recibir los posts", error);
    throw error;
  }
};

export const getMyProfile = async (username)=>{
  try {
    const response = await fetch(`${url}/users/${username}`, {
      method: "GET",
      redirect: "follow",
    })
    const data = await response.json()
    if (!data.success) {
      throw new Error(data.message)
    }
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}

 
