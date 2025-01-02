import React, { useEffect, useState } from "react";
// import Header from "./Components/Header";
// import MyCards from "./Components/MyCards";
// import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import BlogePost from "./Components/Pages/BlogePost";

const App = () => {
  // console.log("🚀 ~ useEffect ~ users:", users)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/bloge/:id" element={<BlogePost/>}/>
    </Routes>
  );
};

export default App;
