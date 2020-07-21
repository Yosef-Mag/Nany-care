import React from "react";
import { Router, Scene } from "react-native-router-flux";
import  {EducationLevel,HowManyKidsCanHandle, Place} from "./Home"
import SignUp from "./signup.js";
import Login from "./Login.js";
import { HiringForm } from "./hiringForm"

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={EducationLevel} title="EducationLevel" initial={true} />
      <Scene key="home" component={HowManyKidsCanHandle} title="HowManyKidsCanHandle" initial={true} />
      <Scene key="home" component={Place} title="Place" initial={true} />
      <Scene key="SignUp" component={SignUp} title="SignUp" />
      <Scene key="Login" component={Login} title="Login" />
      <Scene key="HiringForm" component={HiringForm} title="HiringForm" />
    </Scene>
  </Router>
);
export default Routes;