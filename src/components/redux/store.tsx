import { configureStore, createStore } from "@reduxjs/toolkit";
import {combinedReducers, persistedReducers} from "./reducers"
import { persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
export const store  = createStore (persistedReducers)
export const persistore = persistStore(store)
// const persistConfig = {
//     key: 'root',
//     storage,
//   }
// export const store = configureStore({
//     reducer : combinedReducers
// })
// export const persistore = persistStore(store)