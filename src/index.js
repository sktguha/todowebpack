import React from "react";
import ReactDOM from "react-dom";
import container from "./components/container";

const App = () => {
  return <div className="test">
  Hello React,Webpack 4 & Babel 7!
  <container />
  </div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));