import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './products';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  }
})