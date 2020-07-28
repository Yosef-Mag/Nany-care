import React from "react";
import { Router, Scene } from "react-native-router-flux";
import  AllNany, {EducationLevel,HowManyKidsCanHandle, Place} from "./Home"
import SignUpPage from "./signup.js";
import LoginPage from "./Login.js";
// import { HiringForm } from "./hiringForm"




const Routes = () => (
  <Router>
    <Scene key="root">
    
      <Scene key="login" component={LoginPage} title="Login" initial={true} />
      <Scene key="signup" component={SignUpPage} title="signup" />
      {/* <Scene key="home" component={AllNany} title="home" /> */}
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
