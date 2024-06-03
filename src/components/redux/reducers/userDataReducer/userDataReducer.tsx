import { createSlice , PayloadAction } from "@reduxjs/toolkit";
const UserDataReducer : any = createSlice({
    name : "UserDataReducer",
    initialState : {
        userName : null,
        email: null
    },
    reducers: {

    }
})
export default UserDataReducer.reducer