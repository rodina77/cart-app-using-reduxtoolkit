import { configureStore } from '@reduxjs/toolkit'
import productSlice from './product-slices'
import cartSlice from './cart-slice'
export const store = configureStore({
  reducer: {
    products:productSlice,
    cart:cartSlice,
  },
})