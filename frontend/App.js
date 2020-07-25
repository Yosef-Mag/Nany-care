// import React from "react";
// import MyDrawer from "./components/slidbar";
// import SignUpPage from "./components/signup";
// import { NavigationContainer } from "@react-navigation/native";
// export default function App() {
//   return (
//     // <SignUpPage />
//     <NavigationContainer>
//       <MyDrawer />
//     </NavigationContainer>
//   );
// }
import React from "react";
import LoginPage from "./components/Login";
import Payment from "./components/payment";
import { AppRegistry, View } from 'react-native';
import Routes from './components/Routes'
import MyDrawer from "./components/slidbar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from 'react-navigation'
import allNany from './components/Home'
// authentication views
// import LoginPage from "./components/Login";
// import SignUpPage from "./components/signup";
export default function App() {
  return <Routes />
}
AppRegistry.registerComponent('App', () => App)
