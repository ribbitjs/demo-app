import * as types from "./actionTypes";

export const increment = num => ({
  type: types.INCREMENT,
  payload: num
});

export const decrement = num => ({
  type: types.DECREMENT,
  payload: num
});
