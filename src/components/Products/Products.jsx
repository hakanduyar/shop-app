import { useState } from "react";
import ProductItem from "./ProductItem.jsx";
import { productsData } from "../../data.js";
import "./Products.css";
import AddNewProduct from "./AddNewProduct.jsx";

function Products() { 
  const [products, setProducts] = useState(productsData)

  function handleSubmit(e, productData) {
    e.preventDefault(); 
    const newProduct = {...productData, id: Math.random(), price: Number(productData.price)}
    setProducts([newProduct, ...products])
    
  }

  return (
    <div className="products">
      <h2>Products Component</h2>
      <AddNewProduct handleSubmit={handleSubmit}/>
      <div className="products-wrapper">
        {products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
