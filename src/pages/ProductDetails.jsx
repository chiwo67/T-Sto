import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} style={{ height: "150px" }} />
      <p>Price: ${product.price}</p>
      
      <div style={{ display: "flex", gap: "1rem", margin: "1rem 0" }}>
        <Link to="overview">Overview</Link>
        <Link to="reviews">Reviews</Link>
        <Link to="specs">Specifications</Link>
      </div>

      <Outlet context={product} />
    </div>
  );
}

export function Overview() {
  return <p>Description: Product overview details content.</p>;
}

export function Reviews() {
  return <p>Customer Reviews: 4.5/5 Stars based on 12 reviews.</p>;
}

export function Specs() {
  return <p>Specifications: Standard material and dimensions.</p>;
}