import React from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <nav id="menu">
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/add">Register</Link>
    </nav>
  );
};

export default Menu;
