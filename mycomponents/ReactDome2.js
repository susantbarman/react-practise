import React, { Component } from "react";
import ReactDOM from "react-dom";
import avater from '../Avatar.css';

class ReactDome2 extends Component {

    changeImg(){
        var container = document.getElementById("imgId");
        ReactDOM.findDOMNode(container).src =
          "https://cdn.pixabay.com/photo/2014/07/21/22/23/flowers-398941_960_720.jpg";



    }
  render() {
    return (
      <div>
        <button onClick={this.changeImg}>Change Image </button>
        <br></br>
        <img id="imgId" src="https://cdn.pixabay.com/photo/2020/06/26/17/16/daisies-5343423_960_720.jpg"></img>
      </div>
    );
  }
}

export default ReactDome2;
