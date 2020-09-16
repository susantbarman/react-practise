import React, { Component } from "react";
import ReactDOM from "react-dom";

class ReactDome extends Component {
  myfun() {
    var container = document.getElementById("myid"); //kothai show hobe
    var elements = <h1>I am practice react dome</h1>; //ki show hobe
    var callback=function(){
        alert("hey i am callback function");
    }
    ReactDOM.render(elements, container,callback);
  }
  render() {
    return (
      <div>
        <button onClick={this.myfun}>React Dome</button>
        <h1 id="myid">My name is react DOM</h1>
      </div>
    );
  }
}

export default ReactDome;
