import { useCart } from '../context/CartContext.jsx'

function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useCart()

  return (
    <div className="cart-item">
      <div className="cart-item-image">{item.image}</div>

      <div className="cart-item-info">
        <h4>{item.name}</h4>
        <p>₹{item.price.toLocaleString('en-IN')} each</p>
      </div>

      <div className="quantity-controls">
        <button
          className="qty-btn"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="qty-value">{item.quantity}</span>
        <button
          className="qty-btn"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <div className="cart-item-total">
        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
      </div>

      <button
        className="btn btn-remove"
        onClick={() => removeFromCart(item.id)}
        aria-label={`Remove ${item.name}`}
      >
        ✕
      </button>
    </div>
  )
}

export default CartItem
