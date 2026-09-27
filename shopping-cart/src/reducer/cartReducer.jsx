// Valid coupon codes and their discount percentages
export const COUPONS = {
  SAVE10: 10,
  SAVE20: 20,
  WELCOME50: 50,
}

export const ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  APPLY_COUPON: 'APPLY_COUPON',
  REMOVE_COUPON: 'REMOVE_COUPON',
  CLEAR_CART: 'CLEAR_CART',
}

export const initialState = {
  items: [],       // { id, name, price, image, quantity }
  coupon: null,     // { code, discountPercent }
  couponError: '',
}

export function cartReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART: {
      const product = action.payload
      const existing = state.items.find((item) => item.id === product.id)

      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      }

      return {
        ...state,
        items: [...state.items, { ...product, quantity: 1 }],
      }
    }

    case ACTIONS.REMOVE_FROM_CART: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      }
    }

    case ACTIONS.UPDATE_QUANTITY: {
      const { id, quantity } = action.payload

      if (quantity < 1) {
        return {
          ...state,
          items: state.items.filter((item) => item.id !== id),
        }
      }

      return {
        ...state,
        items: state.items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        ),
      }
    }

    case ACTIONS.APPLY_COUPON: {
      const code = action.payload.trim().toUpperCase()
      const discountPercent = COUPONS[code]

      if (!discountPercent) {
        return { ...state, coupon: null, couponError: 'Invalid coupon code' }
      }

      return {
        ...state,
        coupon: { code, discountPercent },
        couponError: '',
      }
    }

    case ACTIONS.REMOVE_COUPON: {
      return { ...state, coupon: null, couponError: '' }
    }

    case ACTIONS.CLEAR_CART: {
      return initialState
    }

    default:
      return state
  }
}
