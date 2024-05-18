// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
// import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductDetail from "./Pages/ProductDetail";
import Navbar from "./Components/Navbar";
const ProductDetailWrapper = () => {
  const { id } = useParams();
  return <ProductDetail productId={id} />;
};
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/products/:id" element={<ProductDetailWrapper />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
