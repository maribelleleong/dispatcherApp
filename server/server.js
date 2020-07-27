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
  const { driver, day, week, startTime, endTime, type, location } = req.body;
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

  res.status(200).json(tasks_list);
});

const checkConflict = (task, startTime, endTime) => {
  let checking = false;
  if (startTime >= task.start_time && startTime < task.end_time) {
    checking = true;
  }

  if (endTime > task.start_time && endTime <= task.end_time) {
    checking = true;
  }

  if (startTime <= task.start_time && endTime >= task.end_time) {
    checking = true;
  }
  return checking;
};
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
