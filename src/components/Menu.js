import React from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
      <nav id="menu">
        <Link to="/">Home</Link>
        <Link to="/users">Usuarios</Link>
        <Link to="/add">Registro</Link>
      </nav>
  );
};

export default Menu;
