import React, { useState } from "react";
import "./header.css";
import logo from "../../logo.png";
import profile from "../../img/profile.png";
import cart from "../../img/cart.png";

const Header = ({ filterProductsBySearch, setShowingPage, nCartItems }) => {
  const [searchPhrase, setSearchPhrase] = useState("");

  const handleChange = (e) => {
    setSearchPhrase(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filterProductsBySearch(searchPhrase);
  };

  return (
    <header>
      <div className="logoContainer">
        {" "}
        <img
          src={logo}
          className="logo"
          onClick={() => {
            filterProductsBySearch("");
          }}
        />
      </div>
      <form className="searchBar" onSubmit={handleSubmit}>
        <input
          name="search"
          type="text"
          onChange={handleChange}
          className="searchBar"
          placeholder="Search..."
        />
      </form>
      <div className="buttons">
        <ul>
          <li>
            <img src={profile} onClick={() => setShowingPage("Profile")} />
          </li>
          <li>
            {" "}
            <img
              src={cart}
              style={{ marginRight: "0px" }}
              onClick={() => setShowingPage("Cart")}
            />
            <a id="cartCount">{nCartItems}</a>
          </li>
          <li>
            <button>Encuentranos</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
