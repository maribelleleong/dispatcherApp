import React from 'react';
import Card from './Card';
import styles from './styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const Day = ({
  day,
  dayNum,
  dayTasks,
  driver,
  week,
  updateTasksList,
  hasTaskConflict,
}) => {
  const classes = useStyles();

  const getTaskSlots = () => {
    let taskSlotGrids = [];

    for (let i = 0; i < dayTasks.tasks.length; i++) {
      let task = dayTasks.tasks[i];
      let marginDiff = i === 0 ? 0 : dayTasks.tasks[i - 1].end_time;

      taskSlotGrids.push(
        <Card
          key={task.id}
          {...{
            task,
            updateTasksList,
            hasTaskConflict,
            week,
            dayNum,
            driver,
            marginDiff,
            i,
          }}
        />
      );
    }
    return taskSlotGrids;
  };

  return (
    <Grid key={day} item xs>
      <Paper className={classes.paper}>{day}</Paper>
      {dayTasks ? getTaskSlots() : null}
    </Grid>
  );
};

export default Day;
