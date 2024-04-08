
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user', //esto es el nombre de la "estanteria"
    initialState: {
      credentials: {} //esto sería como la estanteria cuando la montas y no tiene nada.
    },
    reducers: {  //cada acción va relacionada a un reducer.
      login: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      logout: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      }
    }
    
});

export const { login, logout } = userSlice.actions;

export const userData = (state) => state.user;

export default userSlice.reducer;