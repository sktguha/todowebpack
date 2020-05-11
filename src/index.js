import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/container";
import "slds"; // SLDS Styles loaded here, find the alias in webpack config

const App = () => {
  return <div className="test">
    Hello React,Webpack 4 & Babel 7!
  <Container />
  </div>;
};

ReactDOM.render( <App />, document.querySelector( "#root" ) );