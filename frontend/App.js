import LoginPage from "./components/Login";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//import Home from "./components/Home";
// import Confirmation from "./components/Confirmation";
//import Confirmation from "./components/Confirmation";

export default function App() {
  return ( 
    <NavigationContainer>
      <LoginPage />
    </NavigationContainer>
  );
}
