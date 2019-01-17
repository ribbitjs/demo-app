import * as types from "../actions/actionTypes";
import { fromJS, toJS } from "immutable";

const initialState = fromJS({
  count: 0
});

const mainReducer = (state = initialState, action) => {
  let tempState;
  let count;
  switch (action.type) {
    case types.INCREMENT:
      tempState = state.toJS();
      console.log("===increment==");
      count = tempState.count += action.payload;

      return fromJS({
        ...tempState,
        count
      });

    case types.DECREMENT:
      console.log("===decrement==");

      tempState = state.toJS();
      count = tempState.count + -action.payload;

      return fromJS({
        ...tempState,
        count
      });

    default:
      return fromJS(state);
  }
};

export default mainReducer;
