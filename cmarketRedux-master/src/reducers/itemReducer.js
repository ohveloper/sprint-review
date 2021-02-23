import { REMOVE_FROM_CART, ADD_TO_CART, SET_QUANTITY } from "../actions/index";
import { initialState } from "./initialState";

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      //TODO
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case REMOVE_FROM_CART:
      //TODO
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.itemId !== action.payload.itemId),
      };

      break;
    case SET_QUANTITY:
      let idx = state.cartItems.findIndex((el) => el.itemId === action.payload.itemId);
      //TODO
      return {
        ...state,
        cartItems: [...state.cartItems.slice(0, idx), action.payload, ...state.cartItems.slice(idx + 1)],
      };

      break;
    default:
      return state;
  }
};

export default itemReducer;
