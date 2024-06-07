import { createSlice, createSelector } from '@reduxjs/toolkit';
import { Product } from '../../type';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  searchQuery:string
}

// Define the initial state
const initialState: CartState = {
  cart: [],
  searchQuery:''
};

// Create the Redux slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: { payload: Product }) => {
      // Check if the product is already in the cart
      const existingProduct = state.cart.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        // If it is, increment the quantity
        existingProduct.quantity += 1;
      } else {
        // If not, add the new product to the cart
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: { payload: Product }) => {
      // Filter out the product with the given ID
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action: { payload: Product }) => {
      // Find the product with the given ID and increment its quantity
      const product = state.cart.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: { payload: Product }) => {
      // Find the product with the given ID and decrement its quantity
      const product = state.cart.find((item) => item.id === action.payload.id);
      if (product && product.quantity >= 1) {
        product.quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
    setSearchQuery: (state, action: { payload: string }) => {
      state.searchQuery = action.payload;
    },
  },
});

// Export the actions
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity,clearCart,setSearchQuery } =
  cartSlice.actions;

// Create selectors
export const selectCartItems = (state: { cart: CartState }) => state.cart.cart;
export const selectTotalItems = createSelector(selectCartItems, (items) =>
  items.reduce((total, item) => total + item.quantity, 0)
);
export const selectTotalPrice = createSelector(selectCartItems, (items) =>
  items.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0)
);
export const selectSearchQuery = (state: { cart: CartState }) => state.cart.searchQuery;

// Export the reducer
export default cartSlice.reducer;