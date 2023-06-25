import {createSlice} from "@reduxjs/toolkit"
const counter=createSlice({
   name:"counter",
   initialState:{position:0},
   reducers:{
    "increament": (state,action)=>{   state.position+= action.payload},
    "decreament": (state) =>{  state.position-=1},
    extraReducers:(state)=>{ state.position-=2 }
    
   }
});
const count=counter.reducer;
const counterActions=counter.actions;
export {count,counterActions}