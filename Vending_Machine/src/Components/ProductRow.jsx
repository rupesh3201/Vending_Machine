// product row
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";
import "../CSS/Menu.css";
import Sprite from "./../assets/Beverages/pngwing.com.png"
import Pepsi from "./../assets/Beverages/pngwing.com (1).png"
import Fanta from "./../assets/Beverages/pngwing.com (3).png"
import water from "./../assets/Beverages/pngwing.com (4).png"
// Importing chips and wafers
import Chesse from "./../assets/Chips&Wafers/cheetosCheese.png"
import Crunchy from "./../assets/Chips&Wafers/cheetosCrunchy.png"

// Centralized product data
const productData = {
  "Chips & Wafers": [
    { imgsrc:Chesse, name: "Cheetos Cheese", quantity: 10, price: 10 },
    { imgsrc:Crunchy, name: "Lays Tomato", quantity: 10, price: 10 },
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
    { imgsrc: water, name: "Yippee", quantity: 10, price: 10 },
    { imgsrc: Pepsi, name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: Sprite, name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: "#", name: "Maggie", quantity: 10, price: 10 },
    { imgsrc: Fanta, name: "Maggie", quantity: 10, price: 10 },
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
