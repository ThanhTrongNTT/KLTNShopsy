// Don't add any asynchronous logic or other "side effects" in reducer
// For example, logging a value to the console, ajax
// Just keep it simple
import { createSlice } from "@reduxjs/toolkit";

export interface CartState {}
const initialState: CartState = {};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addTocCart: (state, action) => {},
        removeCart: (state, action) => {},
        updateCart: (state, action) => {},
        clearCart: (state) => {},
    },
});

export const { addTocCart, removeCart, updateCart, clearCart } =
    cartSlice.actions;

export default cartSlice.reducer;
