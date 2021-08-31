import React from 'react';
import './App.css';
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './features/Homepage';
import Login from './features/Login';
import Signup from './features/Signup';
import Reset from './features/ForgotPassword/index';
import Navbar from './components/Navbar';
import JobsDashboard from './features/JobDashboard';
import PostJob from './features/PostJob';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="navContainer">
        <Navbar />
        </div>
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
            <Route path="/:username/dashboard">
              <JobsDashboard />
            </Route>
            <Route path="/:username/postjob">
              <PostJob />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
