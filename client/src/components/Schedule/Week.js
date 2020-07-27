import React from 'react';
import Grid from '@material-ui/core/Grid';

import Day from './Day';

const dayObj = {
  Sunday: 1,
  Monday: 2,
  Tuesday: 3,
  Wednesday: 4,
  Thursday: 5,
  Friday: 6,
  Saturday: 7,
};

const Week = ({ tasksOfWeek }) => {
  return (
    <Grid container spacing={1} justify='space-around' alignItems='flex-start'>
      {dayObj &&
        Object.keys(dayObj).map((day) => (
          <Day
            key={day}
            day={day}
            dayTasks={tasksOfWeek ? tasksOfWeek[dayObj[day]] : null}
          />
        ))}
    </Grid>
  );
};

export default Week;
