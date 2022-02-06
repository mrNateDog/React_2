import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from "./App";
//import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css"; //imported
import Counters from "./components/counters";

//rendering data using components
ReactDOM.render(<Counters />, document.getElementById("root"));
//registerServiceWorker();
