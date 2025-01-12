import { useState } from "react";
import ProductItem from "./ProductItem.jsx";
import { productsData } from "../../data.js";
import "./Products.css";
import AddNewProduct from "./AddNewProduct.jsx";

function Products() {
  const [titleState, setTitleState] = useState("Şapka");

  return (
    <div className="products">
      <h2>Products Component</h2>
      <AddNewProduct/>
      <div className="products-wrapper">
        {productsData.map((product) => {
          return (
            <ProductItem
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              titleState={titleState}
              setTitleState={setTitleState}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
