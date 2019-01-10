import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
// import './styles.css';
// import StyledApp from './styled.js'
// import {
//     StyledApp as App
// } from './styled.js'
import App from './App'

// const App = () => {
//   return <div className = "title">Hello React!</div>;
// };

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));