import React from "react";
import ReactDOM from "react-dom";
import School from "./School";

import "./styles.css";

function App() {
  return <School />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
