/* only 'Route' can go inside <Routes></Routes> */
import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Cohort from "./pages/Cohort"

function App() {
  return (
    /*
     - only <Route></Route> can go inside <Routes></Routes>
     - must create component when placeholder is in path
    */
    <Routes>
      <Route path="*" element={<h1>Not Found!</h1>}></Route>
      <Route path="/" element={<h1>Hello, World!</h1>}></Route>
      <Route path="cohorts/:fishFingers" element={<Cohort />}></Route>
    </Routes>
  );
}

export default App;
