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

  const changeWeek = (weekInput) => {
    console.log('appjs', weekInput);
    state.week = weekInput;
    state.tasksOfWeek = state.tasksList[state.driver][weekInput];
    setState({
      ...state,
      week: state.week,
      tasksOfWeek: state.tasksOfWeek,
    });
    console.log('after chgweek', state);
  };

  useEffect(() => {
    console.log('rawr from useEffect');
    axios.get('/tasks').then((res) => {
      setState((prev) => ({
        ...prev,
        tasksList: res.data,
        tasksOfWeek: Object.values(res.data)[0][1],
        drivers: Object.keys(res.data),
        driver: Object.keys(res.data)[0],
      }));
    });
  }, []);

  // useEffect(() =>{

  // },[state.week])

  const setDriver = (event) => {
    console.log('event click', event.target);
    // setState((prev) => ({
    //   ...prev,
    //   driver: event.target.value,
    //   tasksOfWeek: prev.tasksList[event.target.value][1],
    // }));
    state.driver = event.target.value;
    state.tasksOfWeek = state.tasksList[event.target.value][state.week];
    setState({
      ...state,
      driver: state.driver,
      tasksOfWeek: state.tasksOfWeek,
    });
    console.log('set driver', state.driver, state.tasksOfWeek);
  };

  return (
    <Router>
      <Navbar />
      <Toolbar
        drivers={state.drivers}
        driver={state.driver}
        setDriver={setDriver}
        changeWeek={changeWeek}
        week={state.week}
      />
      <Schedule tasksOfWeek={state.tasksOfWeek} />
      <Switch>
        <Route exact path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
