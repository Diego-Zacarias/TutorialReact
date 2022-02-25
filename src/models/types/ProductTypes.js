import PropTypes from "prop-types";

const ProductTypes = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  image: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  slang: PropTypes.string,
});

export default ProductTypes;
