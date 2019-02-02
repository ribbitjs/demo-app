import { Switch, Route } from "react-router-dom";
import React from "react";
import One from "./one";
import Two from "./two";
import Three from "./threeFolder/three";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import styles from '../App.css'

import mainReducer from "../reducers/reducer";

import getRibbitStore from "/Users/butlerm/Documents/code-smith/production-project/ribbit/lib/getRibbitStore";

const reducer = combineReducers({ mainReducer });

export const store = getRibbitStore(reducer, thunk);

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={One} />
            <Route exact path="/two" component={Two} />
            <Route exact path="merp/three" component={Three} />
          </Switch>
        </Provider>
      </div>
    );
  }
}

export default App;
