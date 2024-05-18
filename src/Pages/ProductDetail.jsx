import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../Services/Api";
import Loader from "../Components/Loader.jsx";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProduct(id);
      setProduct(productData);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg p-6">
          <div className="lg:w-1/2">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-screen object-cover rounded-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-6 mt-4 lg:mt-0">
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
            <p className="text-2xl font-bold pb-3">Price : </p>
            <p className="text-lg font-semibold">{product.price} USD</p>
            <p className="text-2xl font-bold pb-3">Product Description :</p>
            <p className="text-gray-700 mb-4">{product.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
