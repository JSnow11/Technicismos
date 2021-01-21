import React, { useState } from "react";
import Header from "../components/header/Header";
import ProductList from "../components/products/ProductList";

const ShopPage = ({ visible, cartItems, setCartItems }) => {
  return <ProductList products={visible} />;
};

export default ShopPage;
