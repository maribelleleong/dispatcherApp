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
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const title = (input) => {};

const DaySchedule = ({ dayTasks }) => {
  const classes = useStyles();

  const x =
    dayTasks &&
    dayTasks.tasks.map((task) => (
      <Grid key={task.id} item xs>
        <Paper className={classes.paper}>
          <Typography gutterBottom>{task.type}</Typography>
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
    <div>
      <Grid
        container
        spacing={3}
        justify='space-around'
        alignItems='flex-start'
      >
        <Grid key={'Sunday'} item xs>
          <Paper className={classes.paper}>{'Sunday'}</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default DaySchedule;
