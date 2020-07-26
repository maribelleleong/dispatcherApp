import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Week = ({ tasksOfWeek }) => {
  const classes = useStyles();
  console.log(tasksOfWeek);
  return (
    <Grid container spacing={1} justify='space-around' alignItems='flex-start'>
      {tasksOfWeek && console.log(tasksOfWeek)}

      {dayObj &&
        Object.keys(dayObj).map((day) => (
          <Day
            day={day}
            dayTasks={tasksOfWeek ? tasksOfWeek[dayObj[day]] : null}
          />
        ))}
    </Grid>
  );
};

export default Week;
