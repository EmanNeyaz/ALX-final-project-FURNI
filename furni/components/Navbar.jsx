import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaShoppingCart, FaUser } from "react-icons/fa"; 
import { CartContext } from "../Context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);
  return (
    <header className="navbar">
      <h4>FURNI</h4>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About US</Link>
        </li>
        
        <li>
          <Link to={"/contact"}>Contact Us</Link>
        </li>
        <li>
          <Link to={"/services"}>Services</Link>
        </li>
        <li>
          <Link to={"/blog"}>Blogs</Link>
        </li>

        </ul>
        <ul>
          <li className="cart">
          <Link to={"/cart"}>
            <FaShoppingCart />
            {cartItemCount > 0 && <span className="badge">{cartItemCount}</span>}
             
          </Link>
          </li>
         <li>
          <Link to={"/login"}>
            <FaUser /> 
          </Link>
         </li>
      </ul>
    </header>
  );
}

export default Navbar;