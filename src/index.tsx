import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/index.css";

const Index: React.VFC = () => {
	return <App />;
};

ReactDOM.render(<Index />, document.getElementById("root"));
