import propTypes from "prop-types";
import "./Button.css";

function Button(props) {
  console.log(props);

  return <button className={`btn btn-${props.color}`}>Click</button>;
}

Button.propTypes = {
  color: propTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ]).isRequired,
};

export default Button;
