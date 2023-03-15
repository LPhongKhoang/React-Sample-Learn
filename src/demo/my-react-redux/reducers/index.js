import { combineReducers } from "redux";
import { ACTION_TYPES } from "../actions/action-types";

const counterReducer = (state = {counter: 0}, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case ACTION_TYPES.DECREASE_COUNTER:
      return {
        ...state,
        counter: state.counter - action.payload
      };
    default:
      return state;
  }
};


// Combine the reducers into a single root reducer
export const rootReducer = combineReducers({
  counter: counterReducer,
});