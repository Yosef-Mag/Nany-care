// import React from "react";
// import { Router, Scene } from "react-native-router-flux";
// import  AllNany, {EducationLevel,HowManyKidsCanHandle, Place} from "./Home"
// import SignUpPage from "./signup.js";
// import LoginPage from "./Login.js";
// // import { HiringForm } from "./hiringForm"




// const Routes = () => (
//   <Router>
//     <Scene key="root">
    
//       <Scene key="login" component={LoginPage} title="Login" initial={true} />
//       <Scene key="signup" component={SignUpPage} title="signup" />
//       {/* <Scene key="home" component={AllNany} title="home" /> */}
//     </Scene>
//   </Router>
// );
// export default Routes;


import React from "react";
import { Router, Scene } from "react-native-router-flux";
import AllNany from "./Home";
import SignUp from "./signup.js";
import Login from "./Login.js";
import payment from "./payment";
import HiringForm from "./hiringForm";
import  AllNany, {EducationLevel,HowManyKidsCanHandle, Place} from "./Home"
import SignUpPage from "./signup.js";
import LoginPage from "./Login.js";
// import { HiringForm } from "./hiringForm"




const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={AllNany} title="all Nany" />
      {/* <Scene key="home" component={HowManyKidsCanHandle} title="HowManyKidsCanHandle" initial={true} />
      <Scene key="home" component={AllNany} title="HowManyKidsCanHandle" initial={true} />
      <Scene key="home" component={Place} title="Place" initial={true} /> */}
      <Scene key="SignUp" component={SignUp} title="SignUp" />
      <Scene key="Login" component={Login} title="Login" initial={true} />
      <Scene key="payment" component={payment} title="payment" />
      <Scene key="HiringForm" component={HiringForm} title="HiringForm" />
    </Scene>
  </Router>
);