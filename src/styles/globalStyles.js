import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
    box-sizing: border-box;
  }
  
  *:focus {
    outline: none;
  }
  html, body{
    margin: 0;
    padding: 0;
  }
  
  html{
    font-size: 62.5%;
  }
  
  body{
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.main};
  }
  
  h1{
    margin: 0;
  }
  
  a {
    text-decoration: none !important;
  }
  ::-webkit-scrollbar {
    width: 10px;
    margin: 10px 0;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.1); 
    border-radius: 10px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.1); 
  }
  
  .MuiDrawer-paperAnchorDockedRight {
    border-left: 0px solid rgba(0, 0, 0, 0.12) !important;
  }
`

export default GlobalStyle
