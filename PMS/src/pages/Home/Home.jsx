import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

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
        {products.map((product) => {
          return (
            <div key={product.id} className="card">
              <img src={product.productImage} alt="Product Image" />
              <h2 className="product-name">{product.productName}</h2>
              <p className="product-description">
                {product.productDescription}
              </p>
              <p>{product.productMaterial}</p>
              {/* <a href="/singleProduct">See More</a> */}
              <Link to={`/singleProduct/${product.id}`}>See More</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
