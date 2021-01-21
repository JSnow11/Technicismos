import React, { useState } from "react";
import "./LoginPage.css";
import logo from "../logo.png";
import leftArr from "../img/leftArr.png";

const LoginPage = ({ onLoginChanged }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const changeHandler = (e) => {
    console.log(e);
    if (e.target.name === "name") {
      setUser(e.target.value);
    } else if (e.target.name === "pass") {
      setPass(e.target.value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(user + " - " + pass);
    if ((user !== "") & (pass !== "")) onLoginChanged({ name: { user } });
  };

  return (
    <div className="loginBackground">
      <div className="loginBox">
        <div className="backBox">
          <img src={leftArr} className="logo" />
        </div>
        <div className="logoBox">
          <img src={logo} />
        </div>
        <div>
          <h2>LogIn</h2>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="name"
              value={user}
              placeholder="username"
              onChange={changeHandler}
            />
            <input
              type="password"
              name="pass"
              value={pass}
              placeholder="password"
              onChange={changeHandler}
            />
            <input className="submit" type="submit" value="Log In" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
