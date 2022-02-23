import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "routes/about";
import Home from "routes/home";
import ProductDetail from "routes/services";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sobre" element={<About />} />
    <Route path="/servicos/:slang" element={<ProductDetail />} />
  </Routes>
);

export default AppRoutes;
