<<<<<<< HEAD
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyDrawer from "./slidbar";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
=======

import React, { Component } from "react";
import { AppRegistry, View } from "react-native";
import Routes from "./components/Routes.js";

class NanyApp extends Component {
  render() {
    return <Routes />;
  }
}
export default NanyApp;
AppRegistry.registerComponent("NanyApp", () => NanyApp);
>>>>>>> 29cdc1d2f362e7cf84998e1e80b05f6840faa769
