import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// import './styles.css';
// import StyledApp from './styled.js'
// import {
//     StyledApp as App
// } from './styled.js'
import App from "./components/App";

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
