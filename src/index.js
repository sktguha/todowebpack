import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/container";
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
  	<div className="test">
  Hello React,Webpack 4 & Babel 7!
  <Container />
  </div>);
};

const AppMain = () => {
  return (
  <Router>
    <Route path="/" component={App} />
  </Router>
  )
};

ReactDOM.render(<AppMain />, document.querySelector("#root"));