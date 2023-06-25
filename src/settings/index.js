// import * as dark from "../ground.css";
import { StyleContext } from "../style/contextStyle";
import { useContext } from "react";
const df={Border:"2px solid red"}
export function Settings({set,value}){
  //  const setLs=useContext(StyleContext);

    const handle=()=>{ set(prev=>prev=="Dark" ? "Light":"Dark"); console.log('okkkk',)
        // set(!value)
        // const linkTag = document.createElement('link');
        // linkTag.rel = "stylesheet";
        // linkTag.type = "text/css";
        // linkTag.href = "";
        // document.getElementsByTagName("head")[0].appendChild(dark);
    };
    return <>
    <p>sdfvsdlmfksdmlfksdkfmlksmlfskdmlf</p>
      <button onClick={handle} >change</button>
    </>
}