import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Home from "./Home.js";
import SignUp from "./signup.js";

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} title="Home" initial={true} />
      <Scene key="SignUp" component={SignUp} title="SignUp" />
    </Scene>
  </Router>
);
export default Routes;
