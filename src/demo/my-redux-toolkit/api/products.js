import axios from "axios";
import { getProductsFailure, getProductsStart, getProductsSuccess } from "../store/products";

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(getProductsStart());

    try {
      const response = await axios.get('https://dummyjson.com/products');
      dispatch(getProductsSuccess(response.data.products));
    } catch (error) {
      dispatch(getProductsFailure(error.message));
    }
  };
};