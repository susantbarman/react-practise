import React, { Component } from "react";
import Bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Update extends Component {
    constructor(){
        super()
        this.refreshNow = this.refreshNow.bind(this);

        
    }
  refreshNow(){
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <button className="btn btn-danger" onClick={this.refreshNow}>
          Refresh button
        </button>
        <h1>{Math.random()}</h1>
      </div>
    );
  }
}




export default Update;
