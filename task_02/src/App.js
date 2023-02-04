import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";

export default class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}
