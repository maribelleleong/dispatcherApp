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

  if (!tasks_list[driver][week]) {
    tasks_list[driver][week] = {};
    tasks_list[driver][week][day] = {};
    tasks_list[driver][week][day].tasks = [newTask];
  } else if (!tasks_list[driver][week][day]) {
    tasks_list[driver][week][day] = {};
    tasks_list[driver][week][day].tasks = [newTask];
  } else {
    tasks_list[driver][week][day].tasks.push(newTask);
  }

  res.status(200).json(tasks_list);

  // check if crash
  // if not, add
  // else throw err

  // if(validToAddTask()){

  // }else{
  //   res.
  // }

  // res.json(tasks_list);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
