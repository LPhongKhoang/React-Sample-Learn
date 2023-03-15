import { ACTION_TYPES } from "./action-types";

export const decreaseCounterAction = (payload) => ({
  type: ACTION_TYPES.DECREASE_COUNTER,
  payload
});