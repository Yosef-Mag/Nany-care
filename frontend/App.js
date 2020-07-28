import React from "react";
import { AppRegistry} from 'react-native';
import MyStack from "./components/Routes";


export default function App() {
  return <MyStack />
}

AppRegistry.registerComponent('Nany App', () => App)

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