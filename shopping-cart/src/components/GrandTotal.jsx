import { useCart } from '../context/CartContext.jsx'

function formatINR(value) {
  return `₹${value.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`
}

function GrandTotal() {
  const { totals, coupon } = useCart()

  return (
    <div className="grand-total">
      <div className="total-row">
        <span>Subtotal</span>
        <span>{formatINR(totals.subtotal)}</span>
      </div>

      {coupon && (
        <div className="total-row discount-row">
          <span>Discount ({coupon.discountPercent}% - {coupon.code})</span>
          <span>−{formatINR(totals.discountAmount)}</span>
        </div>
      )}

      <div className="total-row">
        <span>GST ({(totals.gstRate * 100).toFixed(0)}%)</span>
        <span>+{formatINR(totals.gstAmount)}</span>
      </div>

      <div className="total-row grand-total-row">
        <span>Grand Total</span>
        <span>{formatINR(totals.grandTotal)}</span>
      </div>
    </div>
  )
}

export default GrandTotal
