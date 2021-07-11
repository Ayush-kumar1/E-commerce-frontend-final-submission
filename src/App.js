import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import Cart from "./Pages/Cart/Cart";
import Wishlist from "./Pages/Wishlist/Wishlist";
import About_us from "./Pages/About_us/About_us";
import Signup from "./Pages/Signup/Signup";
import Login from "./Components/Login/Login";
import { useEffect } from "react";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";

function App() {
  const { state, dispatch } = useCart();

  let Navigate = useNavigate();

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
    } else {
      Navigate("/login");
    }
  }, []);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/aboutus" element={<About_us />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
