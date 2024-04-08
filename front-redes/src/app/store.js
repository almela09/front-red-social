import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import { thunk } from "redux-thunk";
//todo esto son LIBRERIAS.
import storage from "redux-persist/lib/storage";

import userSlice from "./slices/userSlice";
import detailSlice from "./slices/detailSlice";


const reducers = combineReducers({
    user: userSlice,
    detail: detailSlice
});

const persistConfig = {
    key: "root",
    storage,

};


const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(thunk),
});