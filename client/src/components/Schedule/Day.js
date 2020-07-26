import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    position: 'relative',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const title = (input) => {};

const Day = ({ day, dayTasks }) => {
  const classes = useStyles();

  const taskSlot =
    dayTasks &&
    dayTasks.tasks.map((task) => (
      <Grid className={classes.grid} key={task.id} citem xs>
        <Paper className={classes.paper}>
          <Typography gutterBottom>{task.type}</Typography>
          <Typography gutterBottom>day: {day}</Typography>
          <Typography gutterBottom variant='subtitle1'>
            {task.location}
          </Typography>
          <Typography gutterBottom variant='subtitle1'>
            {task.start_time} to {task.end_time}
          </Typography>
        </Paper>
      </Grid>
    ));

  return (
    <Grid key={day} item xs>
      <Paper className={classes.paper}>{day}</Paper>
      {taskSlot}
    </Grid>
  );
};

export default Day;
