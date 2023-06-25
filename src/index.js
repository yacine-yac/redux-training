import React from 'react';
import ReactDOM from 'react-dom/client';

// import styled from "styled-components";
import App from './App';
import reportWebVitals from './reportWebVitals'; 
// import Styling from './styling';
import './index.css';
// const AppCMP= createGlobalStyle`
//   p{color:red important;}
//   *{background-color:green important;}
// `;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    {/* <Styling>
      
    </Styling> */}

    
       <App/> 
    
    
     {/*    <ThemeProvider  theme={{
  fg: "palevioletred",
  bg: "white"
}} >

                


         </ThemeProvider> */}
        
               {/* <AppCMP /> */}         
                
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
