import React from "react";
import { Router, Scene } from "react-native-router-flux";
import  AllNany from "./Home"
import SignUp from "./SignUpInputs";
import Login from "./LoginInputs";
import payment from "./payment"
import  HiringForm  from "./hiringForm"


// const Routes = () => (
//   <Router>
//     <Scene key="root">
//       <Scene key="home" component={AllNany} title="all Nany"  />
//       {/* <Scene key="home" component={HowManyKidsCanHandle} title="HowManyKidsCanHandle" initial={true} />
//       <Scene key="home" component={AllNany} title="HowManyKidsCanHandle" initial={true} />
//       <Scene key="home" component={Place} title="Place" initial={true} /> */}
//       <Scene key="SignUp" component={SignUp} title="SignUp" />
//       <Scene key="Login" component={Login} title="Login" initial={true}/>
//       <Scene key="payment" component={payment} title="payment" />
//       <Scene key="HiringForm" component={HiringForm} title="HiringForm" />
//     </Scene>
//   </Router>
// );
// export default Routes;

import { createNativeStackNavigator } from 'react-native-screens/native-stack';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}>
      <Stack.Screen
        name="login"
        component={Login}
        options={{
          title: 'login page',
        }}
      />
      <Stack.Screen
        name="home"
        component={AllNany}
        options={{
          title: 'home page',
        }}
      />
      <Stack.Screen
        name="payment"
        component={payment}
        options={{
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="sigup"
        component={Signup}
        options={{
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
}
export default MyStack;