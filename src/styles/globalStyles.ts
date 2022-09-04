import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

 *{
    margin: 0;
    padding:0;
    border:0;
    box-sizing: border-box;
 }
 body{
   background: #ebebeb3b;
   font-family: 'Inter',sans-serif;
 }
 ul{
  list-style: none;
  
 }
 a{
  text-decoration: none;
 }
 h1,h2,h3{
   font-weight: bold;
   color: white;
 }

 button{
  box-shadow: 1px 4px 5px #00000038;
  cursor: pointer;
  padding: 15px 20px;
  border-radius: 15px;
  color:white;
 }

`;
