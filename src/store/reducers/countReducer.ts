// khởi tạo state 
import { createSlice } from '@reduxjs/toolkit'

const countState:number = 0;

const countReducer = createSlice({
    name: "countReducer",
    initialState:countState,
    reducers:{
        // đây là những action
        increase:(state)=>state+=1,
        decrease:(state)=>state-=1,
        reset:(state)=>state=0,
    }
});
//xuất ra những action
export const {increase , decrease , reset} = countReducer.actions;
//xuất ra thằng reducer
export default countReducer.reducer;