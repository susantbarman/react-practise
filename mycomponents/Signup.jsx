import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      Fname: "",
      Lname: "",
      Email: "",
      Phone: "",
    };
  }

  onchangehandeler = (event) => {
    var inputName = event.target.name;
    var inputvalue = event.target.value;

    this.setState({ [inputName]: inputvalue });

    if (inputName == "Fname") {
      var namePatern = /^([a-zA-Z]){2,30}$/;

      if (!namePatern.test(inputvalue)) {
        this.setState({ Fname: "First name is not valid" });
      }
    }
    if (inputName == "Lname") {
      var namePatern = /^([a-zA-Z]){2,30}$/;

      if (!namePatern.test(inputvalue)) {
        this.setState({ Lname: "Last name is not valid" });
      }
    }
    if (inputName == "Email") {
      var emailPatern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!emailPatern.test(inputvalue)) {
        this.setState({ Email: "Email is not valid" });
      }
    }
    if (inputName == "Phone") {
      if (!Number(inputvalue)) {
        this.setState({ Phone: "Number is not valid" });
      }
    }
  };

  subfrom = () => {
    alert();
  };
  render() {
    return (
      <div>
        <p>First name: {this.state.Fname}</p>
        <p>Last name: {this.state.Lname}</p>
        <p>Email Address: {this.state.Email}</p>
        <p>Phone number: {this.state.Phone}</p>

        <form className="w-60 mx-auto" onSubmit={this.subfrom}>
          <h2 className="text-center">Signup From</h2>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              First Name
            </label>
            <input
              onChange={this.onchangehandeler}
              name="Fname"
              type="text"
              placeholder="Enter Your First Name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Last Name
            </label>
            <input
              onChange={this.onchangehandeler}
              name="Lname"
              type="text"
              placeholder="Enter Your Last Name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              onChange={this.onchangehandeler}
              name="Email"
              type="email"
              placeholder="Enter Your Email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Phone No
            </label>
            <input
              onChange={this.onchangehandeler}
              name="Phone"
              type="number"
              placeholder=" phone no"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
