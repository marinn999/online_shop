import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);
  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((p) => (
          <div key={p.id}>
            <img src={p.image} alt={p.title} width="100"></img>
            <h3>{p.title}</h3>
            <p>{p.price}</p>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
