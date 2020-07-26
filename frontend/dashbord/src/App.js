import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddAdmin from './components/AddAdmin';
// import Admin from './components/Admin';
import Login from './components/Login'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
        <NavBar />
          <Router>
              <Route exact path="/" component={Login} />
              <Route exact path="/AddAdmin" component={AddAdmin} />
              {/* <Route exact path="/Admin" component={Admin} /> */}
          </Router> 
    </div>
  );
}

export default App;
