// import axios from "axios";

// const API_URL = "https://fakestoreapi.com";

// export const getProducts = async () => {
//   const response = await axios.get(`${API_URL}/products`);
//   return response.data;
// };

// export const getProduct = async (id) => {
//   const response = await axios.get(`${API_URL}/products/${id}`);
//   return response.data;
// };
const API_URL = "https://fakestoreapi.com";

export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};

export const getProduct = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
};
