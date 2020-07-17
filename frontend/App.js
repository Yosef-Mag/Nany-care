
// import React from 'react';
import React, { Component } from "react";
import { AppRegistry, View } from "react-native";
import Routes from "./components/Routes.js";
import Nany from "./components/Home.js";




class NanyApp extends Component {
  render() {
    return  <Nany />

    
  }
}

AppRegistry.registerComponent("NanyApp", () => NanyApp);
export default NanyApp;

