import PropTypes from 'prop-types';
import '../CSS/addedCard.css';
//card 
const AddedCard = ({ item }) => {
  return (
    <div className="container">
      <div className="something">
        <h3>{item.productName}</h3>
        <p>Price: Rs. {item.productPrice}</p>
        <p>Quantity: {item.productQuantity}</p>
      </div>
      <div className='imageDiv'>
        <img className='addedItemImage' src={item.productImage} alt={item.productName} />
      </div>
    </div>
  );
};

// Correct PropTypes definition
AddedCard.propTypes = {
  item: PropTypes.shape({
    productName: PropTypes.string.isRequired,
    productPrice: PropTypes.number.isRequired,
    productQuantity: PropTypes.number.isRequired,
    productImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default AddedCard;
