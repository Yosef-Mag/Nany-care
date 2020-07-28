import React from "react";
import MyDrawer from "./components/slidbar";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./components/Login";
export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
