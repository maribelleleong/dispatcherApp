import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Day = ({ day, dayTasks }) => {
  const classes = useStyles();

  const getTaskSlots = () => {
    let taskSlotGrids = [];
    for (let i = 0; i < dayTasks.tasks.length; i++) {
      let task = dayTasks.tasks[i];
      let marginDiff = i == 0 ? 0 : dayTasks.tasks[i - 1].end_time;

      taskSlotGrids.push(
        <Grid
          className={classes.grid}
          key={task.id}
          style={{ marginTop: `${(task.start_time - marginDiff) * 3.72}rem` }}
          item
          xs
        >
          <Paper
            className={classes.paper}
            style={{ height: `${(task.end_time - task.start_time) * 3.5}rem` }}
          >
            <Typography gutterBottom>{task.type}</Typography>
            {task.end_time - task.start_time >= 2 ? (
              <>
                <Typography gutterBottom variant='subtitle1'>
                  {task.location}
                </Typography>
                <Typography gutterBottom variant='subtitle1'>
                  {task.start_time} to {task.end_time}
                </Typography>
              </>
            ) : null}
          </Paper>
        </Grid>
      );
    }
    return taskSlotGrids;
  };

  return (
    <Grid key={day} item xs>
      <Paper className={classes.paper}>{day}</Paper>
      {dayTasks ? getTaskSlots() : null}
      {dayTasks && console.log(dayTasks)}
    </Grid>
  );
};

export default Day;
