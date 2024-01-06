import { Routes, Route } from "react-router-dom";
import Homepage from './Homepage'
import Project from "./Project";
import Contact from "./Contact";
import Skills from "./Skills";
import { Flex } from "@chakra-ui/react";

function Scrollarea() {
  return (
    <Flex 
      height='85vh'
      width='full'
      overflow='auto'
      >
      <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/project" element={<Project />}></Route>
      <Route path="/skills" element={<Skills />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Flex>
    
  )
};

export default Scrollarea;

