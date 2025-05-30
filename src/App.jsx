import React from "react";
import Header from "./Components/Header/Header";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Pages/Home";
import ShopCategory from "./Pages/ShopCategory";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";


function App() {
  

  return (
    <>
      
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/men" element = {<ShopCategory category="men" />} />
        <Route path="/women" element = {<ShopCategory category="women" />} />
        <Route path="/kids" element = {<ShopCategory category="kids" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:productId" element={<Product />} />
        
      </Routes>
      <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App;
