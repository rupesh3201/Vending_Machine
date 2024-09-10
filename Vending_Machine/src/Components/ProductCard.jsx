// product card
import PropTypes from 'prop-types';
import '../CSS/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className='card'>
      <div className='product-img'>
        <img src={product.imgsrc} alt={product.name} /> {/* Display the image */}
      </div>
      <div className='product-name'>
        {product.name} {/* Display the product name */}
      </div>
      <div className='product-info'>
        Qty: {product.quantity} | Rs. {product.price} {/* Display quantity and price */}
      </div>
      <div className='product-add'>
        <button className='addButton'>ADD</button> {/* Add button */}
      </div>
    </div>
  );
};

// Validate the props
ProductCard.propTypes = {
  product: PropTypes.shape({
    imgsrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default ProductCard;
