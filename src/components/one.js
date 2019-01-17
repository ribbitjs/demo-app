import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

const mapStateToProps = store => {
  const state = store.mainReducer.toJS();
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: num => {
      dispatch(actions.increment(num));
    },
    decrement: num => {
      dispatch(actions.decrement(num));
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
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(One);
