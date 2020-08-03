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
<<<<<<< HEAD
const AppStack = createStackNavigator({
  AllNany: AllNany,
  nannyReserved: nannyReserved,
});
=======
const AppStack = createStackNavigator({ 
  AllNany: AllNany,
   MyDrawer:MyDrawer,
   MapScreen:MapScreen,
   });
>>>>>>> 7d61d95a748fc4efb107abad1752a1a8fc9cb915
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
