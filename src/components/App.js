import { Switch, Route } from "react-router-dom";
import React from "react";
import One from "./one";
import Two from "./two";
import Three from "./threeFolder/three";

import { createStore, combineReducers, applyMiddleware } from "redux";
import { connect, Provider } from "react-redux";

import mainReducer from "../reducers/reducer";

const reducer = combineReducers({ mainReducer });

const store = createStore(reducer);
// import "../App.css";

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
