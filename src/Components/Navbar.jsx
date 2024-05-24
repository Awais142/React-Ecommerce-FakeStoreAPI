import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between items-center font-bold sticky top-0 text-slate-950 h-16 mb-5 px-6 bg-orange-100 z-50">
      <div className="logo w-32 h-32 md:w-32 md:h-32">
        <img src="/Assets/logo.png" alt="Logo" className="w-full h-auto   " />
      </div>
      <nav className="hidden md:flex space-x-6">
        <Link className="px-3" to="/">
          Home
        </Link>
        <Link className="px-3" to="/products">
          Products
        </Link>
        <Link className="px-3" to="/products/category/electronics">
          Electronics
        </Link>
        <Link className="px-3" to="/products/category/jewelery">
          Jewelry
        </Link>
        <Link className="px-3" to="/products/category/men's%20clothing">
          Men's Clothing
        </Link>
        <Link className="px-3" to="/products/category/women's%20clothing">
          Women's Clothing
        </Link>
      </nav>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-orange-100 z-50 flex flex-col items-center md:hidden">
          <Link className="py-2" to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link className="py-2" to="/products" onClick={toggleMenu}>
            Products
          </Link>
          <Link
            className="py-2"
            to="/products/category/electronics"
            onClick={toggleMenu}
          >
            Electronics
          </Link>
          <Link
            className="py-2"
            to="/products/category/jewelery"
            onClick={toggleMenu}
          >
            Jewelry
          </Link>
          <Link
            className="py-2"
            to="/products/category/men's%20clothing"
            onClick={toggleMenu}
          >
            Men's Clothing
          </Link>
          <Link
            className="py-2"
            to="/products/category/women's%20clothing"
            onClick={toggleMenu}
          >
            Women's Clothing
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
