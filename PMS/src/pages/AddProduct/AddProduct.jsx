import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./AddProduct.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  //1st Approach
  // const [productImage, setProductImage] = useState("");
  // const [productName, setProductName] = useState("");
  // const [productDescription, setProductDescription] = useState("");
  // const [productMaterial, setProductMaterial] = useState("");

  // const addProduct = async (e) => {
  //   e.preventDefault();
  //   const response = await axios.post(
  //     "https://6677ef860bd45250561cf68d.mockapi.io/products",
  //     {
  //       productName: productName,
  //       productImage: productImage,
  //       productDescription: productDescription,
  //       productmaterial: productMaterial,
  //     }
  //   );
  //   console.log(response);
  // };

  //Second Approach
  // const addProduct = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget); //{}
  //   console.log(...formData);
  //   const data = Object.fromEntries(formData);
  //   const response = await axios.post(
  //     "https://6677ef860bd45250561cf68d.mockapi.io/products",
  //     data
  //   );
  //   console.log(response);
  // };

  //Third Approach
  const [data, setData] = useState({
    productName: "",
    productImage: "",
    productDescription: "",
    productMaterial: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    console.log(data);
  };

  const addProduct = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://6677ef860bd45250561cf68d.mockapi.io/products",
      data
    );

    if (response.status == 201) {
      navigate("/");
    } else {
      alert("something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      <div id="product-form">
        <h2>Product Information</h2>
        <form onSubmit={addProduct}>
          {/* <input
            type="text"
            id="productName"
            name="productName"
            required
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />

          <label htmlFor="productImage">Product Image</label>
          <input
            type="text"
            id="productImage"
            name="productImage"
            accept="image/*"
            required
            onChange={(e) => {
              setProductImage(e.target.value);
            }}
          />

          <label htmlFor="productDescription">Product Description</label>
          <textarea
            id="productDescription"
            name="productDescription"
            rows="4"
            required
            onChange={(e) => {
              setProductDescription(e.target.value);
            }}
          ></textarea>

          <label htmlFor="productMaterial">Product Material</label>
          <input
            type="text"
            id="productMaterial"
            name="productMaterial"
            required
            onChange={(e) => {
              setProductMaterial(e.target.value);
            }}
          /> */}
          {/* <label htmlFor="productName">Product Name</label>
          /* <input type="text" id="productName" name="productName" required />
          <label htmlFor="productImage">Product Image</label>
          <input
            type="text"
            id="productImage"
            name="productImage"
            accept="image/*"
            required
          />
          <label htmlFor="productDescription">Product Description</label>
          <textarea
            id="productDescription"
            name="productDescription"
            rows="4"
            required
          ></textarea>
          <label htmlFor="productMaterial">Product Material</label>
          <input
            type="text"
            id="productMaterial"
            name="productMaterial"
            required
          />
          <button type="submit">Submit</button> */}
          <label htmlFor="productName">Product Name</label>
          /*{" "}
          <input
            type="text"
            id="productName"
            name="productName"
            required
            onChange={handleChange}
          />
          <label htmlFor="productImage">Product Image</label>
          <input
            type="text"
            id="productImage"
            name="productImage"
            accept="image/*"
            required
            onChange={handleChange}
          />
          <label htmlFor="productDescription">Product Description</label>
          <textarea
            id="productDescription"
            name="productDescription"
            rows="4"
            required
            onChange={handleChange}
          ></textarea>
          <label htmlFor="productMaterial">Product Material</label>
          <input
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

export default AddProduct;
