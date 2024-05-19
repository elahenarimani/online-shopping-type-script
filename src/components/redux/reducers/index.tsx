import {combineReducers} from "@reduxjs/toolkit"
import buyCartReducer from "./buyCart/buyCartReducer"
import productListReducer from "./productList/productListReducer"
import {persistReducer} from 'redux-persist'
// import storage from "redux-persist/lib/storage";
import storage from 'redux-persist/lib/storage'
export const combinedReducers = combineReducers({
    buyCart : buyCartReducer,
    productList : productListReducer
})
export const persistedReducers = persistReducer({key:'root',storage,whitelist:['buyCart','productList']},combinedReducers)