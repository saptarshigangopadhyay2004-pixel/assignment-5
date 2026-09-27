import { createContext, useContext, useReducer, useMemo } from 'react'
import { cartReducer, initialState, ACTIONS } from '../reducer/cartReducer.jsx'

const GST_RATE = 0.18 // 18% GST

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (product) =>
    dispatch({ type: ACTIONS.ADD_TO_CART, payload: product })

  const removeFromCart = (id) =>
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: id })

  const updateQuantity = (id, quantity) =>
    dispatch({ type: ACTIONS.UPDATE_QUANTITY, payload: { id, quantity } })

  const applyCoupon = (code) =>
    dispatch({ type: ACTIONS.APPLY_COUPON, payload: code })

  const removeCoupon = () => dispatch({ type: ACTIONS.REMOVE_COUPON })

  const clearCart = () => dispatch({ type: ACTIONS.CLEAR_CART })

  // Derived totals, recalculated whenever items/coupon change
  const totals = useMemo(() => {
    const subtotal = state.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )

    const discountPercent = state.coupon ? state.coupon.discountPercent : 0
    const discountAmount = (subtotal * discountPercent) / 100
    const afterDiscount = subtotal - discountAmount

    const gstAmount = afterDiscount * GST_RATE
    const grandTotal = afterDiscount + gstAmount

    const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0)

    return {
      subtotal,
      discountPercent,
      discountAmount,
      afterDiscount,
      gstRate: GST_RATE,
      gstAmount,
      grandTotal,
      totalItems,
    }
  }, [state.items, state.coupon])

  const value = {
    items: state.items,
    coupon: state.coupon,
    couponError: state.couponError,
    totals,
    addToCart,
    removeFromCart,
    updateQuantity,
    applyCoupon,
    removeCoupon,
    clearCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
