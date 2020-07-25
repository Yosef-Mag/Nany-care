// import React from "react";
import { Router, Scene } from "react-native-router-flux";
// import LoginPage from "./components/Login";
import Home from "./components/Home";
//import Payment from "./components/payment";



import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
//import Routes from './Routes.js'

class App extends Component {
   render() {
      return (
         <Home />
      )
   }
}
AppRegistry.registerComponent('App', () => App)
export default App



// import MyDrawer from "./components/slidbar";
// import { NavigationContainer } from "@react-navigation/native";
// export default function App() {
//   return <Routes />;
// }
// import { createStackNavigator } from 'react-navigation'
// // authentication views
// import LoginPage from "./components/Login";
// import SignUpPage from "./components/signup";
// import AllNany from "./components/Home";

// const AuthNavigator = createStackNavigator(
//   {
//     Login: { screen: LoginPage },
//     Register: { screen: SignUpPage },
//     // nanyForm:{screen:HiringForm}
//   },
//   {
//     headerMode: 'none'
//   }
// );
// const Routes = () => (
//   <Router>
//     <Scene key="root">
    
//       <Scene key="login" component={LoginPage} title="Login" initial={true} />
//       <Scene key="signup" component={SignUpPage} title="signup" />
//       <Scene key="home" component={AllNany} title="home" />
//     </Scene>
//   </Router>
// );
