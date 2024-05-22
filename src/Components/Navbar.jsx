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
