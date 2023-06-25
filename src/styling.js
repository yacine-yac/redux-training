import React, { useState,useLayoutEffect, useEffect } from 'react';
import useLocalStorage from "use-local-storage";
import { StyleContext } from './style/contextStyle';

import {createUseDisableImportedStyles} from "./disabledstyle.ts"
const LightTheme =()=>React.lazy(async () =>(await import('./red.css')));
const DarkTheme =()=>React.lazy(async() =>(await import('./dark.css')));
const useDisableImportedStyles= createUseDisableImportedStyles();
 function Styling({children}){
    const [ls,setLs]=useState("Dark")
    // const data= localStorage.getItem('mode') ? "Dark" :"Light";
    console.log(ls,"eeeeee");
    const result =()=>{ switch (ls){
        case "Dark":  return  <LightTheme />
        case "Light": return  <DarkTheme/>
    
        default: return <LightTheme />;
    }

}
console.log('render component')
useEffect(()=>{
    document.styleSheets.length >3 && (document.styleSheets[3].disabled=true);
console.log('effect')}
);
useLayoutEffect(()=>{console.log("layout")});
    return  <>
        <React.Suspense fallback={<></>}>
             {useDisableImportedStyles()}
             {result()}
        </React.Suspense>
        <StyleContext.Provider value={setLs}>
            {children}
        </StyleContext.Provider>
        
    </> 
}
export default Styling;
