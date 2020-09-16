import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import './Demo.css';

import App from "./App";
// import Demo from './Demo';
import "./App.css";
import Avatar from "./Avatar";
import "./Avatar.css";
// import Welcome from "./mycomponents/Function";
// import Class from "./mycomponents/Class";
// import Statee from "./mycomponents/State";
// import Condition1 from "./mycomponents/Condition";
// import Upadate from "./mycomponents/Update";
// import ReactDome from "./mycomponents/ReactDome";
// import ReactDome2 from "./mycomponents/ReactDome2";
import Form from "./mycomponents/Form";
import Signup from "./mycomponents/Signup";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Signup />
    </div>
    <div className="App">
      <Form />
      {/* <ReactDome2 />
      <ReactDome />
      <Statee />
      <Welcome name="susant" />
      <Class name="payel" />
      <Condition1 />
      <Upadate />
      <Avatar id="1" name="susant" work="web developer" />
      <Avatar id="1" name="santanu" work="service man" />
      <Avatar id="1" name="Arno" work="marketing" />
      <Avatar id="1" name="Pijush" work="Marketing" /> */}
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
