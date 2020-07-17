import React, { Component } from "react";
import { AppRegistry, View } from "react-native";
import Routes from "./components/Routes.js";
import SignUp from "./components/signup.js";

function NanyApp() {
  return (
    <View>
      <Routes />
      <SignUp />
    </View>
  );
}

AppRegistry.registerComponent("NanyApp", () => NanyApp);
export default NanyApp;
