import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Statee extends Component {
  constructor() {
    super();

    this.State = {
      name: " susant ",
      age: "24",
      work: {
        fast: "website design",
        sec: "webdevelopment",
        three: "graphic design",
        four: "digital marketing",
      },
    };
  }

  changeName(a) {
    this.setState = {
      name: a,
    };
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Hello States{this.State.name}</h1>
        {/* <h1 className="text-center">Hello States{this.State.work.three}</h1> */}
        <button
          onClick={this.changeName.bind(this, "Rain")}
          className="btn btn-danger "
        >
          Change name
        </button>
      </div>
    );
  }
}

export default Statee;
