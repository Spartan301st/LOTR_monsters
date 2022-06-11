import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// React17 render syntax
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// React18 render syntax
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
