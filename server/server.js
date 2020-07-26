const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());

// import data
const { tasks_list } = require('./__fixture__/tasks_list');

app.get('/tasks.json', (req, res) => {
  res.json(tasks_list);
});

app.get('/tasks', (req, res) => {
  res.json(tasks_list);
});

app.post('/tasks', (req, res) => {
  console.log(req.body);
  // const { name, day, week, startTime, endTime, jobType, location } = req.body;
  // const newTask = {
  //   id: uuidv4(),
  //   type: jobType,
  //   start_time: startTime,
  //   end_time: endTime,
  //   location,
  // };
  // tasks_list[name][week][day].tasks.push(newTask);
  return res.status(204).json({});

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
