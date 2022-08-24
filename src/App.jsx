import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCohort from "./pages/SingleCohort";
import AllCohorts from "./pages/AllCohorts";

function App() {
  return (
    /*
     - only <Route></Route> can go inside <Routes></Routes>
     - must create component when placeholder (/:fishFingers) is in path
    */
    <Routes>
      <Route path="/" element={<Header />}>
        
        <Route path="cohorts" element={<AllCohorts />}>
          <Route path=":fishFingers" element={<SingleCohort />}></Route>
        </Route>

        <Route path="about" element={<About />}></Route>

        <Route index element={<Home />}></Route>

      </Route>

      <Route path="*" element={<h1>Not Found!</h1>}></Route>
    </Routes>
  );
}

export default App;
