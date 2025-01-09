import propTypes from "prop-types";
import "./Button.css";

function Button(props) {
  const { color, size, children } = props;
  const btnClassNames = `btn btn-${color} btn-${size}`;
  return <button className={btnClassNames}>{children}</button>;
}

Button.propTypes = {
  color: propTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ]).isRequired,
  size: propTypes.oneOf(["sm", "md", "lg"]).isRequired,
  title: propTypes.string,
  children: propTypes.node,
};

export default Button;
