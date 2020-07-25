import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Navbar from './components/layout/Navbar';
import Login from './components/Login';
import Toolbar from './components/Toolbar/Toolbar';
import Schedule from './components/Schedule/Schedule';

import './App.scss';

function App() {
  const [state, setState] = useState({
    tasksList: {},
    week: 1,
    tasksOfWeek: {},
    driver: '',
    drivers: [],
  });

  useEffect(() => {
    console.log('rawr from useEffect');
    axios.get('/tasks').then((res) => {
      console.log(res.data);
      console.log(Object.keys(res.data));

      setState((prev) => ({
        ...prev,
        tasksList: res.data,
        tasksOfWeek: Object.values(res.data)[0][1],
        drivers: Object.keys(res.data),
        driver: Object.keys(res.data)[0],
      }));

      console.log(state.drivers);
    });
  }, []);

  const setDriver = (name) => {
    setState((prev) => ({ ...prev, driver: name }));
  };

  return (
    <Router>
      <Navbar />
      <Toolbar
        drivers={state.drivers}
        driver={state.driver}
        setDriver={setDriver}
      />
      <Schedule />
      <Switch>
        <Route exact path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
