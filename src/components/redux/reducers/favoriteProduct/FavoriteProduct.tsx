import { createSlice } from "@reduxjs/toolkit";
interface IFavProduct {
  id: string;
}
const initState: IFavProduct[] = [];
const favoriteProductReducer: any = createSlice({
  name: "FavoriteProductArray",
  initialState: initState,
  reducers: {
    addToFavorite: function (state, action) {
      const existingProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (!existingProduct) {
        state.push({ id: action.payload.id });
      }
    },
    removeFromFavorite: function (state, action) {
      return state.filter((product) => product.id !== action.payload.id);
    },
  },
});
export const { addToFavorite, removeFromFavorite } =
  favoriteProductReducer.actions;
export default favoriteProductReducer.reducer;
