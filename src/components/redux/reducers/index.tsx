import { combineReducers } from "@reduxjs/toolkit";
import buyCartReducer from "./buyCart/buyCartReducer";
import productListReducer from "./productList/productListReducer";
import favoriteProductReducer from "./favoriteProduct/FavoriteProduct";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
export const combinedReducers = combineReducers({
  buyCarty: buyCartReducer,
  productList: productListReducer,
  favoritProduct: favoriteProductReducer,
});
export const persistedReducers = persistReducer(
  {
    key: "root",
    storage,
    whitelist: ["buyCarty", "productList", "userData", "favoritProduct"],
  },
  combinedReducers
);
