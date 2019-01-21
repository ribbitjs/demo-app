import * as types from "./actionTypes";

export const increment = num => ({
  type: types.INCREMENT,
  payload: num
});

export const decrement = num => ({
  type: types.DECREMENT,
  payload: num
});

export const sendFetch = () => {
  return dispatch => {
    fetch("https://baconipsum.com/api/?type=meat-and-filler")
      .then(response => response.json())
      .then(myJson => {
        console.log("FETCH SUCCESS");
        dispatch(fetchSuccess(myJson));
      });
  };
};

export const fetchSuccess = data => ({
  type: types.FETCH_SUCCESS,
  payload: data
});

export const getJoke = () => {
  return dispatch => {
    fetch("https://geek-jokes.sameerkumar.website/api")
      .then(response => response.json())
      .then(myJson => {
        console.log("GET JOKE SUCCESS");
        dispatch(getJokeSuccess(myJson));
      });
  };
};

export const getJokeSuccess = joke => ({
  type: types.GET_JOKE_SUCCESS,
  payload: joke
});
