
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import "../CSS/Menu.css";

// Centralized product data
const productData = {
  "Chips & Wafers": [
    { imgsrc: "#", name: "Lays Salted", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Lays Tomato", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 }
  ],
  "Noodles": [
    { imgsrc: "#", name: "Yippee", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 }
  ],
  "Chocolate Bars": [
    { imgsrc: "#", name: "Yippee", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 }
  ],
  "Beverages": [
    { imgsrc: "#", name: "Yippee", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 }
  ]
};

const ProductRow = ({ sectionName }) => {
  const productsToDisplay = productData[sectionName] || [];

  return (
    <div className="product-section-row">
      <div className="product-section-name">
        <h3>{sectionName}</h3>
      </div>
      <div className="product-view-section">
        {productsToDisplay.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

// Define prop types for ProductRow
ProductRow.propTypes = {
  sectionName: PropTypes.string.isRequired
};

export default ProductRow;
