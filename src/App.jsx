import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails, { Overview, Reviews, Specs } from "./pages/ProductDetails";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />}>
              <Route path="overview" element={<Overview />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="specs" element={<Specs />} />
            </Route>
           
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}