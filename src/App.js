import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <div className="container">
        <p>Adding Routing!</p>
      </div>
      <Route path="/" component={Home} /> //has two properties-- route and path
      <Route path="/about" exact component={About} /> //
    </Router>
  );
}
export default App;
