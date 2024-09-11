import { useState } from "react";
import PropTypes from "prop-types";
import "../CSS/ProductCard.css";
import "../CSS/addedCard.css"
import toast, { Toaster } from "react-hot-toast";

function ProductCard({ product }) {
  const [addedItems, setAddedItems] = useState([]);

  const handleAddItems = (product, quantity) => {
    const item = {
      productName: product.name,
      productPrice: product.price,
      productQuantity: quantity,
    };

    // Use functional update to ensure you're working with the latest state
    setAddedItems((prevItems) => [...prevItems, item]);

    // Log the updated items list
    console.log([...addedItems, item]); // Log the updated array
  };

  // Ensure product is defined before accessing its properties
  if (!product) {
    return <div>Product information is missing.</div>;
  }

  return (
    <div className="card">
      <div className="product-img">
        <img
          className="product-image"
          src={product.imgsrc}
          alt={product.name || "Product image"}
        />
        {/* Display the image */}
      </div>
      <div className="product-name">{product.name || "Unknown Product"}</div>
      <div className="product-info">
        Qty: {product.quantity || 0} | Rs. {product.price || 0}{" "}
        {/* Display quantity and price */}
      </div>
      <div className="product-add">
        <button
          className="addButton"
          onClick={() => {
            handleAddItems(product, 1);
            toast.success(`${product.name} added successfully`);
          }}
        >
          Add
        </button>
      </div>
      <Toaster />
    </div>
  );
}

// Define PropTypes for prop validation
ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    imgsrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
