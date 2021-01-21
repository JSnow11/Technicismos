import React, { useState } from "react";
import "./product.css";
import showMore from "../../img/showMore.png";
import add2cart from "../../img/add2Cart.png";

const Product = ({ product, addToCart }) => {
  return (
    <div className="productBox">
      <div className="productImgContainer">
        <img src={product.imgURL}></img>
      </div>
      <h3>{product.title}</h3>
      <text>{product.description}</text>
      <h4>{product.price} $</h4>
      <div className="pButtons">
        <img src={showMore} onClick={() => {}} />
        <img
          src={add2cart}
          onClick={() => {
            addToCart(product);
          }}
        />
      </div>
    </div>
  );
};

export default Product;
