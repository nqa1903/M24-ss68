import { createSlice } from "@reduxjs/toolkit";

const randomState:number[] = [];

const randomReducer = createSlice({
    name : "randomReducer",
    initialState : randomState,
    reducers : {
        add:(state)=>{state.push(Math.floor(Math.random()*100))},
        reset1:()=>{return []},
    }
});

export const {add , reset1} = randomReducer.actions;

export default randomReducer.reducer;