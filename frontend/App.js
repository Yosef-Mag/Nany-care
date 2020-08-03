// import SignUp from "./components/SignUpInputs";
// import LoginInputs from "./components/LoginInputs";
// import {AllNany} from "./components/Home";
// import AuthLoadingScreen from "./components/loading";
// import HiringForm from "./components/hiringForm";
// import { createAppContainer, createSwitchNavigator } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// const AppStack = createStackNavigator({ AllNany: AllNany });
// const AuthStack = createStackNavigator({
//   LoginInputs: LoginInputs,
//   SignUp: SignUp,
//   HiringForm: HiringForm,
// });

// export default createAppContainer(
//   createSwitchNavigator(
//     {
//       AuthLoadingScreen: AuthLoadingScreen,
//       App: AppStack,
//       Auth: AuthStack,
//     },
//     {
//       initialRouteName: "AuthLoadingScreen",
//     }
//   )
  
// );
// import React from "react";
// import MyDrawer from "./components/slidbar";
// import { NavigationContainer } from "@react-navigation/native";
// import Home from "./components/Home";
// import Confirmation from "./components/Confirmation";
// //import Confirmation from "./components/Confirmation";
// export default function App() {
//   return (
//     <Home />
//     // <NavigationContainer>
//     //   <MyDrawer />
//     // </NavigationContainer>
//   );
// }


import SignUp from "./components/SignUpInputs";
import Login from "./components/LoginInputs";
import AllNany from "./components/Home";
import MapScreen from "./components/map";
// import nannyReserved from "./components/Home";
import MyDrawer from "./components/slidbar";
import AuthLoadingScreen from "./components/loading";
import HiringForm from "./components/hiringForm";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
const AppStack = createStackNavigator({ 
  AllNany: AllNany,
   MyDrawer:MyDrawer,
   MapScreen:MapScreen,
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