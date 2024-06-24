import { createSlice } from "@reduxjs/toolkit";

const toggleState:boolean = false;

const toggleReducer = createSlice({
    name:"toggleReducer",
    initialState:toggleState,
    reducers:{
        toggle:(state)=>!state,
    }
})

export const{toggle} = toggleReducer.actions;

export default toggleReducer.reducer;