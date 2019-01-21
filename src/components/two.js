import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import ribbitPreload from "/home/marlon/Desktop/ribbit/lib/api/ribbitPreload.js";

const mapStateToProps = store => {
  const state = store.mainReducer.toJS();
  return {
    joke: state.joke
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getJoke: () => {
      dispatch(actions.getJoke());
    }
  };
};

class Two extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    ribbitPreload(this.props.getJoke, "two");
  }

  render() {
    return (
      <div>
        <h1>PAGE TWO</h1>
        <p>{this.props.joke}</p>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Two);
