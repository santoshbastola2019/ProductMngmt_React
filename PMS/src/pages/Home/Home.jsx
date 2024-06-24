import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await axios.get(
      "https://6677ef860bd45250561cf68d.mockapi.io/products"
    );
    setProducts(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className="card-container">
        {products.map((products) => {
          return (
            <div key={products.id} className="card">
              <img src={products.productImage} alt="Product Image" />
              <h2 className="product-name">{products.productName}</h2>
              <p className="product-description">
                {products.productDescription}
              </p>
              <p>{products.productMaterial}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
