import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

//todo esto son LIBRERIAS.
import storage from "redux-persist/lib/storage";

import userSlice from "./slices/userSlice";
import persistStore from "redux-persist/es/persistStore";



const reducers = combineReducers({
    user: userSlice,
    
});

const persistConfig = {
    key: "root",
    storage,
    transforms: [
        encryptTransform({
          secretKey: import.meta.env.VITE_SECRET_KEY, 
          onError: function (error) {
            console.log(error)
          },
        }),
      ],
};

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  })
  
  export const persistor = persistStore(store)


// export default configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: false,
//         }),
// });

