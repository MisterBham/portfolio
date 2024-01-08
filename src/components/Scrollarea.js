import { Routes, Route } from "react-router-dom";
import Homepage from './Homepage'
import Project from "./Project";
import Contact from "./Contact";
import Skills from "./Skills";

function Scrollarea() {
  return (
      <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/project" element={<Project />}></Route>
      <Route path="/skills" element={<Skills />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    
  )
};

export default Scrollarea;

