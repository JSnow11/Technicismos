import React, { useState } from "react";
import "./cart.css";

const CartItem = ({ item }) => {
  console.log(item.product.imgUrl);
  return (
    <div className="cartItem">
      <div className="cartImgContainer">
        <img src={item.product.imgURL} />
      </div>

      <h3>{item.product.title}</h3>
      <h4>{item.number}</h4>
      <h4>{item.product.price}</h4>
      <h4>X</h4>
    </div>
  );
};

export default CartItem;
