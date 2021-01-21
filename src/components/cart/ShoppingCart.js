import React, { useState } from "react";
import "./cart.css";
import CartItem from "./CartItem";

const Cart = ({ user, cartItems, setCartItems }) => {
  console.log(cartItems);
  return (
    <div className="cartContainer">
      <div className="tableTitles" style={{ width: "100%" }}>
        <h3>Producto</h3>
        <h4>Cantidad</h4>
        <h4>Precio</h4>
        <h4>Eliminar</h4>
      </div>
      {cartItems.map((item) => {
        return <CartItem item={item} />;
      })}
    </div>
  );
};

export default Cart;
