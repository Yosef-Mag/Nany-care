// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";

// import SignUpPage from "./components/signup";
// import LoginPage from "./components/Login";
// import AllNany from "./components/Home";

// // NAVIGATION
// const StackNavigator = createStackNavigator();

// function App() {
//   <NavigationContainer>
//     <StackNavigator.Navigator>
//       <StackNavigator.Screen name="SignUpPage" component={SignUpPage} />
//       <StackNavigator.Screen name="LoginPage " component={LoginPage} />
//       <StackNavigator.Screen name="AllNany" component={AllNany} />
//     </StackNavigator.Navigator>
//   </NavigationContainer>;
// }



import React, { useState } from "react";
import MyDrawer from "./components/slidbar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
import SignUp from "./components/SignUpInputs";
import LoginPage from "./components/Login";
import AllNany from "./components/Home";
import { auth } from "firebase";

const Stack = createStackNavigator();

export default function App() {
  // const ( auth , setAuth) =useState(false)
  // const [auth, setAuth] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} />

        <Stack.Screen name="ِAll" component={AllNany} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// function App() {
//   // const ( auth , setAuth) =useState(false)
//   const [auth, setAuth] = useState(true);
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//         {auth ? (
//           <Stack.Screen name="SignUp" component={SignUp} />
//         ) : (
//           <Stack.Screen name="Home" component={AllNany} />
//         )}
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
// }
// import React from "react";
// import MyDrawer from "./components/slidbar";
// // import OrderPlacedScreen from "./components/OrderDetailsScreen";
// import { NavigationContainer } from "@react-navigation/native";
// import SignUpPage from "./components/signup";

// export default function App() {
//   return <SignUpPage />;
// }
// // import React from "react";
// // import LoginPage from "./components/Login";
// // import Payment from "./components/payment";
// // import { AppRegistry, View } from 'react-native';
// // import Routes from './components/Routes'
// // import MyDrawer from "./components/slidbar";
// // import { NavigationContainer } from "@react-navigation/native";
// // import { createStackNavigator } from 'react-navigation'
// // import allNany from './components/Home'
// // // authentication views
// // // import LoginPage from "./components/Login";
// // export default function App() {
// //   return <Routes />
// // }
// // AppRegistry.registerComponent('App', () => App)
