import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./EditProduct.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  //edit Product
  const editProduct = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      `https://6677ef860bd45250561cf68d.mockapi.io/products/${id}`,
      product
    );
    if (response.status == 200) {
      navigate(`/singleProduct/${id}`);
    } else {
      alert("Something went wrong!");
    }
  };

  //Fetch product of id
  const fetchProduct = async () => {
    const response = await axios.get(
      `https://6677ef860bd45250561cf68d.mockapi.io/products/${id}`
    );
    setProduct(response.data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Navbar />
      <div id="product-form">
        <h2>Edit Product</h2>
        <form onSubmit={editProduct}>
          <label htmlFor="productName">Product Name</label>
          <input
            value={product.productName}
            type="text"
            id="productName"
            name="productName"
            required
            onChange={handleChange}
          />
          <label htmlFor="productImage">Product Image</label>
          <input
            value={product.productImage}
            type="text"
            id="productImage"
            name="productImage"
            accept="image/*"
            required
            onChange={handleChange}
          />
          <label htmlFor="productDescription">Product Description</label>
          <textarea
            value={product.productDescription}
            id="productDescription"
            name="productDescription"
            rows="4"
            required
            onChange={handleChange}
          ></textarea>
          <label htmlFor="productMaterial">Product Material</label>
          <input
            value={product.productMaterial}
            type="text"
            id="productMaterial"
            name="productMaterial"
            required
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default EditProduct;
