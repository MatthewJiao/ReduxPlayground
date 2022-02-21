import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

export const mainReducer = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});
