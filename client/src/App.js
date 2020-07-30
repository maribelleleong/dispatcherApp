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

  const hasTaskConflict = (
    driver,
    week,
    day,
    startTime,
    endTime,
    update,
    id = 0
  ) => {
    const driverTaskList = state.tasksList[driver];

    if (!driverTaskList[week]) {
      return false;
    }
    if (!driverTaskList[week][day]) {
      return false;
    }

    if (!driverTaskList[week][day].tasks) {
      return false;
    }

    let checking = false;
    if (!update) {
      driverTaskList[week][day].tasks.forEach((task) => {
        const task_startTime = Number(task.start_time);
        const task_endTime = Number(task.end_time);

        if (startTime >= task_startTime && startTime < task_endTime) {
          checking = true;
        }

        if (endTime > task_startTime && endTime <= task_endTime) {
          checking = true;
        }

        if (startTime <= task_startTime && endTime >= task_endTime) {
          checking = true;
        }
      });
    } else {
      // get the tasks that excludes itself
      const cleanedTaskList = driverTaskList[week][day].tasks.filter(
        (task) => task.id !== id
      );

      //check the rest
      cleanedTaskList.forEach((task) => {
        const task_startTime = Number(task.start_time);
        const task_endTime = Number(task.end_time);

        if (startTime >= task_startTime && startTime < task_endTime) {
          checking = true;
        }

        if (endTime > task_startTime && endTime <= task_endTime) {
          checking = true;
        }

        if (startTime <= task_startTime && endTime >= task_endTime) {
          checking = true;
        }
      });
    }
    return checking;
  };

  return (
    <Router>
      <Navbar />
      <Toolbar
        tasksList={state.tasksList}
        drivers={state.drivers}
        driver={state.driver}
        setDriver={setDriver}
        setWeek={setWeek}
        week={state.week}
        updateTasksList={updateTasksList}
        hasTaskConflict={hasTaskConflict}
      />
      <Schedule
        tasksOfWeek={state.tasksOfWeek}
        driver={state.driver}
        week={state.week}
        updateTasksList={updateTasksList}
        hasTaskConflict={hasTaskConflict}
      />
      <Switch>
        <Route exact path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
