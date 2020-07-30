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

module.exports = {
  checkConflict,
};
