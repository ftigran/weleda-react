import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";

//import Log from "./components/Modal/LoginModal/LoginModal";

//import list from "./components/Header/List/List";
import "./index.scss";
import { HashRouter } from "react-router-dom";
ReactDOM.render(
  <HashRouter basename={"/"}>
    <App />
  </HashRouter>,

  document.getElementById("root")
);

//import Main from './components/pages/main/main' //++

// import Rules from './components/Rules/Rules'//++
// import Top from './components/Top/Top' //++
// import Priz from './components/Priz/Priz' //++
// import Random sfrom './components/Random/Random' //++
// import Winners from './components/Winners/Winners' //++
