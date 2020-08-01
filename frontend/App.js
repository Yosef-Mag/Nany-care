import SignUp from "./components/SignUpInputs";
import LoginInputs from "./components/LoginInputs";
import AllNany from "./components/Home";
import AuthLoadingScreen from "./components/loading";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Implementation of HomeScreen, OtherScreen, SignInScreen, AuthLoadingScreen
// goes here.

const AppStack = createStackNavigator({ AllNany:AllNany });
const AuthStack = createStackNavigator({ LoginInputs: LoginInputs , SignUp: SignUp });


export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoadingScreen: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoadingScreen',
    }
  )
);





// const Stack = createStackNavigator();
// export default function App() {
//   // const ( auth , setAuth) =useState(false)
//   // const [auth, setAuth] = useState(false);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
       
//           <Stack.Screen name="SignUp" component={SignUp} />
//           <Stack.Screen name="LoginPage" component={LoginInputs} />

//           <Stack.Screen name="AllNany" component={AllNany} />
       
        
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



