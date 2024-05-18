import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <>
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-gray-700 mb-4">{product.price} USD</p>
      <Link
        to={`/products/${product.id}`}
        className="text-blue-500 hover:underline"
      >
        View Details
      </Link>
    </div>
  </>
);

export default ProductCard;
