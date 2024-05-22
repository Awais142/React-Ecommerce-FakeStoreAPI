import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";
import Navbar from "./Components/Navbar";
import ProductsByCategory from "./Pages/ProductsByCategory";
import Slider from "./Components/Slider";

const ProductDetailWrapper = () => {
  const { id } = useParams();
  return <ProductDetail productId={id} />;
};

function App() {
  return (
    <Router>
      <Navbar />
      <Slider />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetailWrapper />} />
        <Route
          path="/products/category/:category"
          element={<ProductsByCategory />}
        />
        {/* Add routes for other categories */}
      </Routes>
    </Router>
  );
}

export default App;
