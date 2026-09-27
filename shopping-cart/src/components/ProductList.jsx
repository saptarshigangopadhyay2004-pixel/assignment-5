import products from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

function ProductList() {
  const { addToCart } = useCart()

  return (
    <section className="product-section">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">{product.image}</div>
            <h3>{product.name}</h3>
            <p className="product-desc">{product.description}</p>
            <p className="product-price">₹{product.price.toLocaleString('en-IN')}</p>
            <button className="btn btn-primary" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductList
