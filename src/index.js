import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createGlobalStyle } from "styled-components";
import Colors from "./assets/Colors";
import Fonts from "./assets/Fonts";
const GlobalStyle = createGlobalStyle`

  body{
    background-color:${Colors.Background}
  }
*{
  ${Fonts.Secondary}
  padding: 0;
   margin: 0;
   box-sizing: border-box;
   scrollbar-width: 0;
   ::-webkit-scrollbar{
     display: none;
   }
}
a{
  text-decoration: none;
}
a:visisted{
  color: #070710;
}
   
`;

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);
