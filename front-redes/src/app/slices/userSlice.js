import {createSlice} from "@reduxjs/toolkit"

export const userSlice = createSlice({

    name: "user",
    initialState:{
        token: null,
        decodeToken:null,
    },

    reducers:{

        setToken: (state, action)=>{
            state.token = action.payload.token
            state.decodeToken = action.payload.decodeToken
        },

        deleteToken: (state)=>{

            state.token= null
            state.decodeToken= null
        },
    }

})

export const {setToken, deleteToken}= userSlice.actions
export default userSlice.reducer