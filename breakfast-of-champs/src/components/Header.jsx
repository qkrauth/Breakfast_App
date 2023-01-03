import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { name } from "../assets/companyInfo";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <p>{name}</p>
      </Link>
      <nav>
        <Link to="/cart">
          <FaShoppingCart color="white" size="25px" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
