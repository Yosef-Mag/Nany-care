<<<<<<< HEAD
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
=======
import SignUp from "./components/SignUpInputs";
import Login from "./components/LoginInputs";
import AllNany from "./components/Home";
//import MapScreen from "./components/map";

import MyDrawer from "./components/Home";
import NanyApp  from "./Routs"
import AuthLoadingScreen from "./components/loading";
import HiringForm from "./components/hiringForm";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
const AppStack = createStackNavigator({ 
  NanyApp :NanyApp,
  MyDrawer:MyDrawer,
  AllNany: AllNany, 
   });
const AuthStack = createStackNavigator({
  Login: Login,
  SignUp: SignUp,
  HiringForm: HiringForm,
});



export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoadingScreen: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    
    },
    {
      initialRouteName: "AuthLoadingScreen",
    }
  )
  
);

 
>>>>>>> 6cdd8a2511b7700e93ae393c511622fc2db4bdce
