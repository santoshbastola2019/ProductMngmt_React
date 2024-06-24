import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./SingleProduct.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const SingleProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  //Store incoming product data in object
  const [product, setProduct] = useState({});

  //Delete Product
  const deleteProduct = async () => {
    const response = await axios.delete(
      `https://6677ef860bd45250561cf68d.mockapi.io/products/${id}`
    );
    if (response.status == 200) {
      navigate("/");
    } else {
      alert("Something went wrong");
    }
  };

  //Fetch Single product
  const fetchSingleProduct = async () => {
    const response = await axios.get(
      `https://6677ef860bd45250561cf68d.mockapi.io/products/${id}`
    );

    setProduct(response.data);
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  return (
    <>
      <Navbar />
      <div className="card">
        <img src={product.productImage} alt="Product Image" />
        <h2 className="product-name">{product.productName}</h2>
        <p className="product-description">{product.productDescription}</p>
        <mark>{product.productMaterial}</mark>
        <br></br>
        <button onClick={deleteProduct}>Delete</button>
        <button onClick={() => navigate(`/editProduct/${product.id}`)}>
          Edit
        </button>
      </div>
    </>
  );
};

export default SingleProduct;
