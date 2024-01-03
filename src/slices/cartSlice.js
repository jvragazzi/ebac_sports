import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload)
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    increaseQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload)
      item.quantity++
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload)
      if (item.quantity > 1) {
        item.quantity--
      }
    },
    clearCart(state) {
      state.items = []
    }
  }
})

export const { actions } = cartSlice

export default cartSlice.reducer
