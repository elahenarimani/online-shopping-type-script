import {combineReducers} from "@reduxjs/toolkit"
import buyCartReducer from "./buyCart/buyCartReducer"
import productListReducer from "./productList/productListReducer"
import UserDataReducer from "./userDataReducer/userDataReducer"
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// import storage from "redux-persist/lib/storage";

export const combinedReducers = combineReducers({
    buyCarty : buyCartReducer,
    productList : productListReducer,
    userData : UserDataReducer
})
export const persistedReducers = persistReducer({
key:'root',
storage,
whitelist:['buyCarty','productList','userData']}
,combinedReducers)