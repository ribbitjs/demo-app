import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

const mapStateToProps = store => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

class Child extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="child">I am a child component wow thats cool</div>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Child);
