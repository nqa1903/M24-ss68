import { configureStore } from "@reduxjs/toolkit";
import dung from "./reducers/countReducer"
import random from "./reducers/randomReducer"
import toggle from "./reducers/toggleReducer";
import change from "./reducers/modeReducer"
const store = configureStore({
    reducer:{
        count:dung,
        random:random,
        toggle:toggle,
        change:change,
    }
});

export default store;