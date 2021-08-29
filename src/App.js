import React from 'react';
import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './features/Homepage';
import Login from './features/Login';
import Signup from './features/Signup';
import Reset from './features/ForgotPassword/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/resetpassword">
            <Reset />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
