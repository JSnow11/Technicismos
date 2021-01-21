import React, { useState } from "react";
import "./product.css";
import Product from "./Product";

const ProductList = ({ products, addToCart, removeFromCart }) => {
  return (
    <div className="productsCointainer">
      {products.map((p) => {
        return <Product addToCart={addToCart} product={p} />;
      })}
    </div>
  );
};

export default ProductList;
