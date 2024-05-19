import { createSlice } from "@reduxjs/toolkit";

const buyCartReducer = createSlice({
    name : "buyCartReducer",
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

// export const {add,remove} = buyCartReducer.actions
export default buyCartReducer.reducer