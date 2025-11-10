import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../UI/Button";
import "./AddNewProduct.css";
import ProductInput from "./ProductInput";

 const productInputs = [
    {
      label: "Title",
      type: "text",
      placeholder: "Ürün ismi giriniz",
      name: "title",
    },
    {
      label: "Image",
      type: "text",
      placeholder: "Ürün görseli giriniz",
      name: "image",
    },
    {
      label: "Description",
      type: "text",
      placeholder: "Ürün açıklaması giriniz",
      name: "description",
    },
    {
      label: "Price",
      type: "number",
      placeholder: "Ürün fiyatı giriniz",
      name: "price",
    },
  ];


function AddNewProduct({handleSubmit}) {
  const [productData, setProductData] = useState({
    title: "",
    image: "",
    price: "",
    description: "",
  });

  function handleChange({ target: { name, value } }) {
    setProductData({ ...productData, [name]: value });
  }

  console.log(productData);
  

 
  
  

  return (
    <form className="product-form" onSubmit={(e) => handleSubmit(e, productData)}>
      {productInputs.map((input, index) => (
        <ProductInput key={index} {...input} handleChange={handleChange}/>
      ))}
      
      <Button size="lg" color="success">
        Yeni Ürün Ekle
      </Button>
    </form>
  );
}

AddNewProduct.propTypes = {
  handleSubmit: PropTypes.func,
}

export default AddNewProduct;
