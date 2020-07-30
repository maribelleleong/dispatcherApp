const express = require('express');
const cors = require('cors');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { checkConflict } = require('./helpers/checkConflict');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

// import data
const { tasks_list } = require('./__fixture__/tasks_list');

app.get('/tasks.json', (req, res) => {
  res.json(tasks_list);
});

app.get('/tasks', (req, res) => {
  res.json(tasks_list);
});

app.post('/tasks', (req, res) => {
  const {
    driver,
    day,
    week,
    startTime,
    endTime,
    type,
    location,
    update,
    oldTaskInfo,
  } = req.body;
  const newTask = {
    id: uuidv4(),
    start_time: startTime,
    end_time: endTime,
    type,
    location,
  };

  const driverTaskList = tasks_list[driver];
  if (!driverTaskList[week]) {
    driverTaskList[week] = {};
    driverTaskList[week][day] = {};
    driverTaskList[week][day].tasks = [newTask];
  } else if (!driverTaskList[week][day]) {
    driverTaskList[week][day] = {};
    driverTaskList[week][day].tasks = [newTask];
  } else {
    const cleanedList = driverTaskList[week][day].tasks.filter(
      (task) => !checkConflict(task, startTime, endTime)
    );

    // update the tasks with cleanedList and newTask
    driverTaskList[week][day].tasks = [...cleanedList, newTask];
  }

  // if update, check if different week or day, if so remove the original from the list
  if (update) {
    const oldWeek = oldTaskInfo.week;
    const oldDay = oldTaskInfo.day;
    const oldId = oldTaskInfo.id;

    if (oldWeek !== week || day !== oldDay) {
      driverTaskList[oldWeek][oldDay].tasks = driverTaskList[oldWeek][
        oldDay
      ].tasks.filter((task) => task.id !== oldId);
    }
  }

  res.status(200).json(tasks_list);
});

app.post('/tasks/delete', (req, res) => {
  const { id, week, day, driver } = req.body;

  const weekTasksArr = tasks_list[driver][week][day].tasks;
  const newWeekTasks = weekTasksArr.filter((task) => task.id !== id);
  tasks_list[driver][week][day].tasks = newWeekTasks;
  res.status(200).json(tasks_list);
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('../client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
