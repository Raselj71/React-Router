import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Contact from "./Pages/Contact";
import Privacy from "./Pages/privacy";
import About from "./Pages/About";
import Home from "./Home";
import Errorpage from "./Pages/Errorpage";
import Navpage from "./Components/Navpage";
import Blog from "./Pages/Blog";
import Single from "./Pages/Single";

function App() {
  return (
    <BrowserRouter>
      <Navpage />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<Single />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
