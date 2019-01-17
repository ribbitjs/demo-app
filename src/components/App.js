import { Switch, Route } from "react-router-dom";
import React from "react";
import One from "./one";
import Two from "./two";
import Three from "./threeFolder/three";
// import "../App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={One} />
          <Route exact path="/two" component={Two} />
          <Route exact path="merp/three" component={Three} />
        </Switch>
      </div>
    );
  }
}

export default App;
