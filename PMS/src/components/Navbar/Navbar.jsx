import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      {/* <a href="/addProduct">Add Product</a> */}
      <Link to="/addProduct">Add Product</Link>
      <Link to="/addProduct">Test</Link>
    </div>
  );
};

export default Navbar;
