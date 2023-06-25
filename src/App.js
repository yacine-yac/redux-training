import { store } from "./store/inde"; 
import { Settings } from "./settings";
// import ".=/App.css"
// import "./ground.css";
// import ReactHelmet from 'react-helmet';
// import { counterActions } from "./store/counter/reducer";
import { Button } from "./component/button";
import React, { useState } from "react";
import { Formulaire } from "./formulaire";
import { ThemeProvider}  from "styled-components";

import GlobalStyle from './gbl';
function App() {
   const theme=()=>{
        return mode=="Dark" ? {color:"black"} : {color:"green"}
  }
  console.log(store.getState(),"actions")
  // const uns=store.subscribe(()=>console.log(store.getState(),"state"))
      //  store.dispatch(counterActions.increament(5));
      //  store.dispatch(counterActions.increament(5));
      //  store.dispatch(counterActions.increament(5));
      //  store.dispatch(counterActions.increament());// uns();
      const[ mode,setMode]=useState("Dark");
  return <>
    
     <ThemeProvider theme={theme()}>
         <GlobalStyle/> 
         <Formulaire />
         <Button color="green">ok</Button>
         <Settings set={setMode} value={mode} ></Settings>
     </ThemeProvider>
  </>
}

export default App;
