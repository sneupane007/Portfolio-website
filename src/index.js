import React from "react";
import "./components/App.css";
import ReactDOM from "react-dom/client";
import AppBar from "./components/AppBar";
import reportWebVitals from "./components/reportWebVitals";
import ViewProjects from "./components/ViewProjects";

const root = ReactDOM.createRoot(document.getElementById("base"));
root.render(
  <React.StrictMode>
    <div className="p-6">
      <AppBar />
    </div>
    <div className="p-6">
      <ViewProjects />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
