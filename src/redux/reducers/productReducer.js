import { ActionTypes } from "../constants";

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};
export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
