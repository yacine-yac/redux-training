import {configureStore} from "@reduxjs/toolkit";
import { count } from "./counter/reducer";
export const store=configureStore({
    reducer:{
       count
    },
    middleware:(middleware)=>middleware()
});


