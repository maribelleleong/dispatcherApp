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

  // initialized data
  useEffect(() => {
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

  const setWeek = (weekInput) => {
    setState((prev) => ({
      ...prev,
      week: weekInput,
      tasksOfWeek: prev.tasksList[prev.driver][weekInput],
    }));
  };

  const setDriver = (event) => {
    setState((prev) => ({
      ...prev,
      driver: event.target.value,
      tasksOfWeek: prev.tasksList[event.target.value][prev.week],
    }));
  };

  const updateTasksList = (newTasksList) => {
    setState((prev) => ({
      ...prev,
      tasksOfWeek: newTasksList[prev.driver][prev.week],
      tasksList: newTasksList,
    }));
  };

  const hasTaskConflict = (driver, week, day, startTime, endTime) => {
    console.log('week', week);
    console.log('day', day);
    const driverTaskList = state.tasksList[driver];

    console.log(driverTaskList);

    if (!driverTaskList[week]) {
      console.log('Here 5');
      return true;
    }
    if (!driverTaskList[week][day]) {
      console.log('Here 3');
      return true;
    }

    if (!driverTaskList[week][day].tasks) {
      console.log('Here 4');
      return true;
    }

    let checking = false;
    driverTaskList[week][day].tasks.forEach((task) => {
      if (startTime >= task.start_time && startTime < task.end_time) {
        console.log('Here 1');
        checking = true;
      }

      if (endTime > task.start_time && endTime <= task.end_time) {
        console.log('Here 2');
        checking = true;
      }
      console.log('ellloooooooo in if');

      if (startTime <= task.start_time && endTime >= task.end_time) {
        console.log('Here 6');
        checking = true;
      }
    });
    return checking;
  };

  return (
    <Router>
      <Navbar />
      <Toolbar
        drivers={state.drivers}
        driver={state.driver}
        setDriver={setDriver}
        setWeek={setWeek}
        week={state.week}
        updateTasksList={updateTasksList}
        hasTaskConflict={hasTaskConflict}
      />
      <Schedule tasksOfWeek={state.tasksOfWeek} />
      <Switch>
        <Route exact path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
