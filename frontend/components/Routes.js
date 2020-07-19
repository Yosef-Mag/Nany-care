import React from "react";
import { Router, Scene } from "react-native-router-flux";
import  {allNany} from "./Home.js"
import SignUp from "./signup.js";

const Routes = () => (
  <Router>
    <Scene key="root">
    <Scene key="home" component={allNany} title="all Nany" initial={true} />
      <Scene key="SignUp" component={SignUp} title="SignUp" />
    </Scene>
  </Router>
);
export default Routes;
