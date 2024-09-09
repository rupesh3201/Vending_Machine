
import '../CSS/ProductCard.css'

function ProductCard() {







  return (
    <div className='card'>
        <div className='product-img'>
            <h3>Product img</h3>

        </div>
        <div className='product-name'>
            <h3>Product name</h3>

        </div>
        <div className='product-info'>

            <h3>quantity</h3>
        </div>
        <div className='product-buy'>
            <button className='add-btn'>ADD</button>
        </div>
    </div>
  )
}

export default ProductCard