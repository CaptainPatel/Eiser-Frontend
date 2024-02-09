import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { fetchCart } from "./api/api";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  const [productLoading, setProductLoading] = useState(false);
  const [productError, setProductError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [loggedIn, setLoggedIn] = useState(() => {
    // Set loggedIn state based on localStorage
    return localStorage.getItem("token") !== null;
  });
  const API_ENDPOINT = "https://eiser-ecommerce-backend.onrender.com"
  useEffect(() => {
    setLoading(true);
    fetchCart()
      .then((res) => {
        console.log(res);
        setCart(res);
      })
      .catch((err) => {
        setError(
          err.message || err.response.data.message || "Something went wrong"
        );
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setProductLoading(true);
    axios
      .get(API_ENDPOINT + "/products")
      .then((res) => {
        setProducts(res.data.products)
      })
      .catch((err) => {
        console.log(err);
        setError(
          err.message || err.response?.data?.message || "Something Went Wrong"
        );
      })
      .finally(() => setProductLoading(false));
  }, []);

  return (
    <div>
      <div>
        <Navbar cart={cart?.length} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              error={productError}
              loading={productLoading}
            />
          }
        />
        <Route
          path="/products"
          element={
            <Products
              products={products}
              error={productError}
              loading={productLoading}
            />
          }
        />
        <Route
          path="/products/:id"
          element={<ProductDetail setCart={setCart} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              loading={loading}
              error={error}
              setCart={setCart}
            />
          }
        />
        <Route path="/contact" element={
          <Contact />
        } />
        <Route path="/register" element={
          <Register />
        } />
        <Route path="/login" element={
          <Login setLoggedIn={setLoggedIn} />
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
