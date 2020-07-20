import React from "react";
import SignUpPage from "./components/signup";
import MyDrawer from "./components/slidbar";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
