import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppBar from "./components/AppBar";
import About from "./components/About";
import ViewProjects from "./components/ViewProjects";
import Contact from "./components/Contact";

const root = ReactDOM.createRoot(document.getElementById("base"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/viewProjects" element={<ViewProjects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
