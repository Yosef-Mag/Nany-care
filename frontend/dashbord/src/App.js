import React from "react";
import AddAdmin from "./components/AddAdmin";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Admin from "./components/Admin";
import LoginAdmin from "./components/Login";
import Drawer from "./components/NavBar.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Drawer />
        <Route exact path="/AdminLogin" component={LoginAdmin} />
        <Route exact path="/AddAdmin" component={AddAdmin} />
        <Route exact path="/Admin" component={Admin} />
      </Router>
    </div>
  );
}

export default App;
