const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

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
  const { driver, day, week, startTime, endTime, jobType, location } = req.body;
  const newTask = {
    id: uuidv4(),
    type: jobType,
    start_time: startTime,
    end_time: endTime,
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
    //check conflict, remove the conflicting tasks
    const cleanedList = driverTaskList[week][day].tasks.filter((task) => {
      !(startTime >= task.start_time && startTime < task.end_time) &&
        !(endTime > task.start_time && endTime <= task.end_time) &&
        !(startTime <= task.start_time && endTime >= task.end_time);
    });

    // update the tasks with cleanedList and newTask
    driverTaskList[week][day].tasks = [...cleanedList, newTask];
  }

  res.status(200).json(tasks_list);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
