import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import Categories from "./Pages/Categories";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Men from "./Pages/Men";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<Men />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
};

export default App;