import { createSlice } from "@reduxjs/toolkit";

const modeState:string = "list";

const modeReducer = createSlice({
    name:"modeReducer",
    initialState:modeState,
    reducers:{
        change:(state)=>{return state === "list" ? "grid" : "list"},
    }
})

export const{change} = modeReducer.actions;

export default modeReducer.reducer;