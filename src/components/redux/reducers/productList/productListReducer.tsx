import { createSlice } from "@reduxjs/toolkit";

const productListReducer = createSlice({
    name : "productListReducer",
    initialState : [],
    reducers: {
        // add: (state,action)=>{
        //     state.push({id : Date.now() , ...action.payload})
        // },
        // remove: (state,action)=>{
        //     state.pop()
        // }
    }
})

// export const {add,remove} = productListReducer.actions
export default productListReducer.reducer
