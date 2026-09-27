import { useCart } from '../context/CartContext.jsx'
import CartItem from './CartItem.jsx'
import CouponForm from './CouponForm.jsx'
import GrandTotal from './GrandTotal.jsx'

function Cart() {
  const { items, totals, clearCart } = useCart()

  return (
    <aside className="cart-section">
      <div className="cart-header">
        <h2>Your Cart ({totals.totalItems})</h2>
        {items.length > 0 && (
          <button className="btn btn-link" onClick={clearCart}>
            Clear cart
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Add some products!</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <CouponForm />
          <GrandTotal />
        </>
      )}
    </aside>
  )
}

export default Cart
