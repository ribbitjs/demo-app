import React from "react";

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
        <button onClick={() => this.handleClick()} />
      </div>
    );
  }
}

export default One;
