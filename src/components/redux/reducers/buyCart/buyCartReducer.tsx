import { createSlice} from "@reduxjs/toolkit";
interface IState {
  id: string | number;
  count: number;
}
const initState: IState[] = [];
const buyCartReducer = createSlice({
  name: "buyCartReducerx",
  initialState: initState,
  reducers: {
    addBuyCart: function (state, action) {
      console.log(action.payload);
      console.log(state);
      const buyCartIndexFinder = state.findIndex(
        (item) => item.id === action.payload.id
      );
    },
    increasCounter: function (state, action) {
      let increaseCounterIndexFinder = state.findIndex(
        (item) => item?.id === action?.payload?.id
      );
      if (increaseCounterIndexFinder === -1) {
        state.push({ id: action.payload.id, count: 1 });
      } else {
        state[increaseCounterIndexFinder].count += 1;
        console.log(state);
      }
    },
    decreaseCounter: function (state, action) {
      const decreaseCounterIndexFinder = state.findIndex(
        (item) => item?.id === action?.payload?.id
      );
      console.log(decreaseCounterIndexFinder);
      if (decreaseCounterIndexFinder >= 0) {
        if (state[decreaseCounterIndexFinder].count > 1) {
          state[decreaseCounterIndexFinder].count -= 1;
        } else {
          state[decreaseCounterIndexFinder].count -= 1;
          state = state.splice(decreaseCounterIndexFinder, 1);
          console.log(state);
        }
      }
    },
    removeFromLBuyCart: function (state, action) {
      const removeIndexFinder = state.findIndex(
        (item) => item.id === action?.payload?.id
      );
      state = state.splice(removeIndexFinder, 1);
    },
  },
});
export const {
  addBuyCart,
  increasCounter,
  decreaseCounter,
  removeFromLBuyCart,
} = buyCartReducer.actions;
export default buyCartReducer.reducer;
