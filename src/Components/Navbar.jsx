import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="flex justify-evenly items-center font-bold text-zinc-50 w-100 h-10 mb-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1">
    <nav>
      <Link className="px-3" to="/">
        Home
      </Link>
      <Link className="px-3" to="/products">
        Products
      </Link>
      <Link className="px-3" to="/About">
        About Us
      </Link>
      <Link className="px-3" to="/Contact Us">
        Contact Us
      </Link>
    </nav>
  </div>
);

export default Navbar;
