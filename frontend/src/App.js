import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Visual from "./components/index";
function App() {
  return (
    <Router>
      <Visual />
    </Router>
  );
}

export default App;
