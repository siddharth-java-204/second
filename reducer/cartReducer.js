import { ADD_ITEM, DELETE_ITEM } from "../actions/actions";

const initialState = {
  noOfItems: 10,
};

const cartReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_ITEM:
      return {
        ...state,
        noOfItems: state.noOfItems + 1,
      };
      break;

    case DELETE_ITEM:
      return {
        ...state,
        noOfItems: state.noOfItems - 1,
      };
    default:
      return state;
  }
};

export default cartReducer;
