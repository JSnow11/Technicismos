import React, { useState } from "react";
import Header from "../components/header/Header";
import ProductList from "../components/products/ProductList";
import "./headeredPage.css";

const HeaderedPage = (props) => {
  return (
    <div className="shopBackground">
      <Header
        nCartItems={props.nCartItems}
        filterProductsBySearch={props.filterProductsBySearch}
        setShowingPage={props.setShowingPage}
      />
      <h1 className="head">{props.head.toUpperCase()}</h1>
      {props.children}
    </div>
  );
};

export default HeaderedPage;
