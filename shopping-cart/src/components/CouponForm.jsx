import { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'

function CouponForm() {
  const [code, setCode] = useState('')
  const { coupon, couponError, applyCoupon, removeCoupon } = useCart()

  const handleApply = (e) => {
    e.preventDefault()
    if (!code.trim()) return
    applyCoupon(code)
  }

  return (
    <div className="coupon-section">
      <h4>Coupon Code</h4>

      {coupon ? (
        <div className="coupon-applied">
          <span>
            ✅ <strong>{coupon.code}</strong> applied (-{coupon.discountPercent}%)
          </span>
          <button className="btn btn-link" onClick={removeCoupon}>
            Remove
          </button>
        </div>
      ) : (
        <form className="coupon-form" onSubmit={handleApply}>
          <input
            type="text"
            placeholder="Enter coupon code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button type="submit" className="btn btn-secondary">
            Apply
          </button>
        </form>
      )}

      {couponError && <p className="coupon-error">{couponError}</p>}
      <p className="coupon-hint">Try: SAVE10, SAVE20, WELCOME50</p>
    </div>
  )
}

export default CouponForm
