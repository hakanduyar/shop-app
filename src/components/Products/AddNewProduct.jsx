import { useState } from "react";
import Button from "../UI/Button";
import "./AddNewProduct.css";

function AddNewProduct() {
  const [productData, setProductData] = useState({
    title: "",
    image: "",
    price: "",
    description: "",
  });

  function handleChange({target: { name, value }}) {
    setProductData({ ...productData, [name]: value });
  }

  console.log(productData);

  return (
    <form className="product-form">
      <div className="product-info">
        <label>Title</label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Ürün ismi giriniz"
          name="title"
        />
      </div>
      <div className="product-info">
        <label>Image</label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Ürün görselini giriniz"
          name="image"
        />
      </div>
      <div className="product-info">
        <label>Description</label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Ürün açıklamasını giriniz"
          name="description"
        />
      </div>
      <div className="product-info">
        <label>Price</label>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Ürün fiyatı giriniz"
          name="price"
        />
      </div>
      <Button size="lg" color="success">
        Yeni Ürün Ekle
      </Button>
    </form>
  );
}

export default AddNewProduct;
