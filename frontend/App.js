import SignUp from "./components/SignUpInputs";
import LoginInputs from "./components/LoginInputs";
import AllNany from "./components/Home";
import nannyReserved from "./components/Home";
import Profile from "./components/profile";
import AuthLoadingScreen from "./components/loading";
import HiringForm from "./components/hiringForm";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
const AppStack = createStackNavigator({
  AllNany: AllNany,
  nannyReserved: nannyReserved,
});
const AuthStack = createStackNavigator({
  LoginInputs: LoginInputs,
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
