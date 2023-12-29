import { createSlice } from "@reduxjs/toolkit";


const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.push(action.payload)
        },
        deleteFromCart(state, action) {
            return state.filter(item => item.id !== action.payload.id)
        },
        resetCart(state) {
            return state = []
        }
    }
})

export const { addToCart, deleteFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;