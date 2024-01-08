import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Scrollarea from "./components/Scrollarea";
import { HashRouter } from "react-router-dom";
import './components/App.css';

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Header />
        <Scrollarea />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
