//All Required Dependancies
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Product from "./Pages/Product";
import Category from "./Pages/Category ";
import ProductListing from "./Pages/ProductListing";
import ForgetPass from "./Pages/ForgetPass";
import ProductDetail from "./Pages/ProductDetail";
import Cart from "./Pages/Cart";
import NoPage from "./Pages/NoPage";

//all Page Handle & navigate by App function
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Register />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/product-listing" element={<ProductListing />} />
        <Route exact path="/forget" element={<ForgetPass />} />
        <Route exact path="/product-detail/" element={<ProductDetail />} />
        <Route exact path="/category-page" element={<Category />} />
        <Route exact path="*" element={<NoPage />} />
      
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
export default App;
