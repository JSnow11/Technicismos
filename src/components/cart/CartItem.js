import React, { useState } from "react";
import "./cart.css";
import add from "../../img/add.png";
import remove from "../../img/remove.png";

const CartItem = ({ item, addToCart, removeFromCart }) => {
  console.log(item.product.imgUrl);
  return (
    <div className="cartItem">
      <div className="cartImgContainer">
        <img src={item.product.imgURL} />
      </div>

      <h3>{item.product.title}</h3>
      <div className="amount">
        {" "}
        <img src={remove} onClick={() => removeFromCart(item.product)} />
        <h4>{item.number}</h4>{" "}
        <img src={add} onClick={() => addToCart(item.product)} />
      </div>
      <h4>{item.product.price}</h4>
      <h4>X</h4>
    </div>
  );
};

export default CartItem;
