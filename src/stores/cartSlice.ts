import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProductCart {
  cartState: number
}

const initialState: ProductCart = {
  cartState: 0
}

export const cartSlice = createSlice({
  name: 'productCart',
  initialState,
  reducers: {
    setAddtoCart: (state) => {
      state.cartState += 1
    }
  }
});

export const { setAddtoCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer