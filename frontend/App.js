import React from "react";
import MyDrawer from "./components/slidbar";
import SignUpPage from "./components/signup";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    // <SignUpPage />
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
