import SignUp from "./components/SignUpInputs";
import Login from "./components/LoginInputs";
import AllNany from "./components/Home";
import MapScreen from "./components/map";
// import nannyReserved from "./components/Home";
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
  
   MapScreen:MapScreen,
   });
const AuthStack = createStackNavigator({
  Login: Login,
  SignUp: SignUp,
  HiringForm: HiringForm,
  
});

// class reactApp extends Component {
//   render() {
//      return (
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
//      )
//   }
// }

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

 