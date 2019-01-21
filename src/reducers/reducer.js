import * as types from "../actions/actionTypes";
import { fromJS, toJS } from "immutable";
import ribbitStore from "/home/marlon/Desktop/ribbit/lib/api/ribbitStore";

const initialState = fromJS({
  count: 8,
  filler: "",
  joke: ""
});

const mainReducer = (state = initialState, action) => {
  let tempState;
  let count;
  let filler;
  let joke;
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

    case types.FETCH_SUCCESS:
      tempState = state.toJS();
      filler = action.payload;

      ribbitStore(["/"]);

      return fromJS({
        ...tempState,
        filler
      });

    case types.GET_JOKE_SUCCESS:
      tempState = state.toJS();
      joke = action.payload;

      ribbitStore(["/two"]);

      return fromJS({
        ...tempState,
        joke
      });

    default:
      return fromJS(state);
  }
};

export default mainReducer;
