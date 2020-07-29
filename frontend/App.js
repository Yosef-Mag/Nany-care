import React from "react";
import MyDrawer from "./components/slidbar";
import { NavigationContainer } from "@react-navigation/native";
//import Home from "./components/Home";
import Confirmation from "./components/Confirmation";
//import Confirmation from "./components/Confirmation";
export default function App() {
  return (
    <Confirmation />
    // <NavigationContainer>
    //   <MyDrawer />
    // </NavigationContainer>
  );
}
