import React from "react";
import logo from "./cook-eat.png";
import { Link } from "react-router-dom";
import "./style.css";

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Logo" className="logo" />
    </Link>
  );
};

export default Logo;
