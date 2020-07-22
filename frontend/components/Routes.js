import React from "react";
import { Router, Scene } from "react-native-router-flux";
import  AllNany, {EducationLevel,HowManyKidsCanHandle, Place} from "./Home"
import SignUp from "./signup.js";
import Login from "./Login.js";
import payment from "./payment"

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={EducationLevel} title="EducationLevel" initial={true} />
      <Scene key="home" component={HowManyKidsCanHandle} title="HowManyKidsCanHandle" initial={true} />
      <Scene key="home" component={AllNany} title="HowManyKidsCanHandle" initial={true} />
      <Scene key="home" component={Place} title="Place" initial={true} />
      <Scene key="SignUp" component={SignUp} title="SignUp" />
      <Scene key="Login" component={Login} title="Login" />
      <Scene key="payment" component={payment} title="payment" />
    </Scene>
  </Router>
);
export default Routes;
// if (state.isLoading) {
//   // We haven't finished checking for the token yet
//   return <SplashScreen />;
// }

// return (
//   <Stack.Navigator>
//     {state.userToken == null ? (
//       // No token found, user isn't signed in
//       <Stack.Screen
//         name="SignIn"
//         component={SignInScreen}
//         options={{
//           title: 'Sign in',
//           // When logging out, a pop animation feels intuitive
//           // You can remove this if you want the default 'push' animation
//           animationTypeForReplace: state.isSignout ? 'pop' : 'push',
//         }}
//       />
//     ) : (
//       // User is signed in
//       <Stack.Screen name="Home" component={HomeScreen} />
//     )}
//   </Stack.Navigator>
// );
