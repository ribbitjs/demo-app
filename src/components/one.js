import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import Child from "./child";
import ribbitPreload from "/home/marlon/Desktop/ribbit/lib/api/ribbitPreload.js";

const mapStateToProps = store => {
  const state = store.mainReducer.toJS();
  return {
    count: state.count,
    filler: state.filler
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: num => {
      dispatch(actions.increment(num));
    },
    decrement: num => {
      dispatch(actions.decrement(num));
    },
    sendFetch: () => {
      dispatch(actions.sendFetch());
    }
  };
};

class One extends React.Component {
  constructor() {
    super();
    this.state = {
      hOne: "PAGE ONE"
    };
  }

  componentWillMount() {
    ribbitPreload(this.props.sendFetch, "one");
  }

  handleClick() {
    console.log("CLICKED");
  }

  render() {
    return (
      <div className="one">
        <h1>{this.state.hOne}</h1>
        <div className="box" />
        <p>{this.props.count}</p>
        <button onClick={() => this.props.increment(1)}>INCREMENT</button>
        <button onClick={() => this.props.decrement(1)}>DECREMENT</button>
        <Child />

        <h2>THIS IS A WHOLE BUNCH OF RANDOM WORDS</h2>
        <p>{this.props.filler}</p>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(One);
