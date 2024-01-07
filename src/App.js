import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Scrollarea from "./components/Scrollarea";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Header />
      <Scrollarea />
      <Footer />
    </HashRouter>
  );
}

export default App;
