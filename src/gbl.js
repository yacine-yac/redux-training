import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  :root{
    --color: ${(props)=>props.theme.color}
  }
  
  /* body {
    background-color: ${(props)=>props.theme.color};
    margin: 0;
    padding: 0; 
    font-family: Open-Sans, Helvetica, Sans-Serif;
  } */
`;
export default GlobalStyle;