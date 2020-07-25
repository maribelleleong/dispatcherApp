import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Login from './components/Login';

import './App.scss';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
