import React from "react";
import ReactDOM from "react-dom";
import Container from "./components/container";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./store/index";

const App = () => {
	return (
		<div>
		<Container />
		</div>
		)
}

const AppProvider = () => {
  return (
  	<Provider store={store}>
  		<App/>
  	</Provider>
  	);
};

const AppMain = () => {
  return (
  <Router>
    <Route path="/" component={AppProvider} />
  </Router>
  )
};

ReactDOM.render(<AppMain />, document.querySelector("#root"));