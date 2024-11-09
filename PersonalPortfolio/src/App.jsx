// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";
import Title from "./components/Title";
import MainImage from "./components/MainImage";
import Extra from "./components/Extra";
import Signature from "./components/Signature";
import Projects from "./components/Projects";
import About from "./components/About";

const Home = () => (
  <div>
    <Heading />
    <Title />
    <MainImage />
    <Extra />
    <Signature />
    <Projects />
  </div>
);

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
