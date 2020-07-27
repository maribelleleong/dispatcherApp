import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
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
  blue: {
    backgroundColor: '#CCF0F8',
  },
  yellow: {
    background: '#FDF57B',
  },
  green: {
    background: '#A9FFEB',
  },
}));

const Day = ({ day, dayTasks }) => {
  const classes = useStyles();

  const getColor = (task) => {
    if (task === 'Drop-Off') {
      return classes.blue;
    }
    if (task === 'Other') {
      return classes.yellow;
    } else {
      return classes.green;
    }
  };

  const getTaskSlots = () => {
    let taskSlotGrids = [];
    for (let i = 0; i < dayTasks.tasks.length; i++) {
      let task = dayTasks.tasks[i];
      let marginDiff = i === 0 ? 0 : dayTasks.tasks[i - 1].end_time;

      const taskInfo = (
        <>
          <Typography>Type: {task.type}</Typography>
          <Typography>
            Time:{' '}
            {task.start_time <= 9
              ? `0${task.start_time}:00`
              : `${task.start_time}:00`}{' '}
            to{' '}
            {task.end_time <= 9
              ? `0${task.end_time}:00`
              : `${task.end_time}:00`}
          </Typography>
          <Typography>
            Location: {task.location ? task.location : 'No location given'}
          </Typography>
        </>
      );

      taskSlotGrids.push(
        <Grid
          onClick={() => console.log('Hello from grid')}
          className={classes.grid}
          key={task.id}
          style={{ marginTop: `${(task.start_time - marginDiff) * 3.72}rem` }}
          item
          xs
        >
          <Tooltip title={taskInfo} placement='top-start'>
            <Paper
              className={`${classes.paper} ${getColor(task.type)}`}
              style={{
                height: `${(task.end_time - task.start_time) * 3.5}rem`,
              }}
            >
              <Typography gutterBottom>{task.type}</Typography>
              {task.end_time - task.start_time >= 2 ? (
                <>
                  <Typography gutterBottom variant='subtitle1'>
                    {task.location}
                  </Typography>
                  <Typography gutterBottom variant='subtitle1'>
                    {task.start_time <= 9
                      ? `0${task.start_time}:00`
                      : `${task.start_time}:00`}{' '}
                    to{' '}
                    {task.end_time <= 9
                      ? `0${task.end_time}:00`
                      : `${task.end_time}:00`}
                  </Typography>
                </>
              ) : null}
            </Paper>
          </Tooltip>
        </Grid>
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
