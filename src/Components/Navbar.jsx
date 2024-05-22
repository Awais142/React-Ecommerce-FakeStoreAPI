import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="flex justify-start items-center font-bold sticky top-0 text-slate-950 h-16 mb-5 p-12 bg-orange-100 z-50">
    <div className="logo w-48 h-48">
      <img src="public/Assets/logo.png" alt="" />
    </div>
    <nav>
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
  </div>
);

export default Navbar;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function Header() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const fetchCategories = async () => {
//     try {
//       const response = await fetch(
//         "https://fakestoreapi.com/products/categories"
//       );
//       const data = await response.json();
//       setCategories(data);
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     }
//   };

//   return (
//     <header>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           {categories.map((category) => (
//             <li key={category}>
//               <Link to={`/category/${category}`}>{category}</Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;
