import PropTypes from "prop-types";
import "./ProductItem.css";
import Button from "../UI/Button";

function ProductItem({ setTitleState, image, title, price, description }) {
  function handleTitleChange() {
    setTitleState("Gömlek");
  }

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={image} alt="product image" />
      </div>
      <div className="product-info">
        <strong className="product-title">{title}</strong>
        <span className="product-price">{price}₺</span>
        <p className="product-description">{description.slice(0, 60)}</p>
        <Button color="primary" size="lg" onClick={handleTitleChange}>
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  setTitleState: PropTypes.func,
};

export default ProductItem;
