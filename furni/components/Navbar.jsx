import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaShoppingCart, FaUser } from "react-icons/fa"; 

function Navbar() {
  return (
    <header className="navbar">
      <h4>FURNI</h4>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/"}>About US</Link>
        </li>
        <li>
          <Link to={"/products"}>Products</Link>
        </li>
        <li>
          <Link to={"/cart"}>
            <FaShoppingCart /> Cart
          </Link>
        </li>
        <li>
          <Link to={"/login"}>
            <FaUser /> Login
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;