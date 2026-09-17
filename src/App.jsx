import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Coupon from "./pages/Coupon";
import Checkout from "./pages/Checkout";
import EmptyCart from "./pages/EmptyCart";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/products" element={<Products />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/coupon" element={<Coupon />} />

      <Route path="/checkout" element={<Checkout />} />

      <Route path="/empty-cart" element={<EmptyCart />} />
    </Routes>
  );
};

export default App;