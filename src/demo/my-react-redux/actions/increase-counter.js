import { ACTION_TYPES } from "./action-types";

export const increaseCounterAction = (payload) => ({
  type: ACTION_TYPES.INCREASE_COUNTER,
  payload
});