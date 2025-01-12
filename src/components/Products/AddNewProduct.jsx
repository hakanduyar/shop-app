import { useState } from "react";
import Button from "../UI/Button";
import "./AddNewProduct.css";

function AddNewProduct() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");


  function handleTitleChange(event) {
    setTitle(event.target.value);
  }
  function handleImageChange(event) {
    setImage(event.target.value);
  }
  function handlePriceChange(event) {
    setPrice(event.target.value);
  }
  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  console.log({
    title,
    image,
    price,
    description,
  });

  return (
    <form className="product-form">
      <div className="product-info">
        <label>Title</label>
        <input
          type="text"
          onChange={handleTitleChange}
          placeholder="Ürün ismi giriniz"
        />
      </div>
      <div className="product-info">
        <label>Image</label>
        <input
          type="text"
          onChange={handleImageChange}
          placeholder="Ürün görselini giriniz"
        />
      </div>
      <div className="product-info">
        <label>Description</label>
        <input
          type="text"
          onChange={handleDescriptionChange}
          placeholder="Ürün açıklamasını giriniz"
        />
      </div>
      <div className="product-info">
        <label>Price</label>
        <input
          type="text"
          onChange={handlePriceChange}
          placeholder="Ürün fiyatı giriniz"
        />
      </div>
      <Button size="lg" color="success">
        Yeni Ürün Ekle
      </Button>
    </form>
  );
}

export default AddNewProduct;
