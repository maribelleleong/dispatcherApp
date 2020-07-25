const express = require('express');
const cors = require('cors');

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
