import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "8px" }}>
      <img src={product.image} alt={product.title} style={{ height: "100px", objectFit: "contain" }} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Link to={`/products/${product.id}/overview`}>View Details</Link>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}