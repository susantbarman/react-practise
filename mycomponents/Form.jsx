import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }

  onchangemethode = (event) => {
    var myname = event.target.name; //username filed name
    var uservalue = event.target.value; //filed value
    this.setState({ [myname]: uservalue });
  };

  onsubmithandeker = () => {
    alert(this.state.username);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onsubmithandeker}>
          <h1>React Form </h1>
          <p>{this.state.username}</p>
          <input
            name="username"
            onChange={this.onchangemethode}
            type="text"
            placeholder="Enter your Name"
          ></input>
          <br></br>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default Form;
