import React, { useState } from 'react';
import UpdateModal from './UpdateModal';
import styles from './styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const Card = ({
  task,
  updateTasksList,
  hasTaskConflict,
  week,
  dayNum,
  driver,
  i,
}) => {
  const classes = useStyles();

  const getColor = (task) => {
    if (task === 'Drop-Off') {
      return classes.blue;
    }
    if (task === 'Other') {
      return classes.yellow;
    } else {
      return classes.purple;
    }
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const taskInfo = (
    <>
      <Typography>Type: {task.type}</Typography>
      <Typography>
        Time:{' '}
        {task.start_time <= 9
          ? `0${task.start_time}:00`
          : `${task.start_time}:00`}{' '}
        to {task.end_time <= 9 ? `0${task.end_time}:00` : `${task.end_time}:00`}
      </Typography>
      <Typography>
        Location: {task.location ? task.location : 'No location given'}
      </Typography>
    </>
  );

  return (
    <>
      <Tooltip title={taskInfo} placement='top-start'>
        <Paper
          className={`${classes.cardPaper} ${getColor(task.type)}`}
          style={{
            gridRow: `${task.start_time + 2} / ${task.end_time + 2}`,
            gridColumn: `${dayNum + 1}`,
          }}
          onClick={handleOpen}
        >
          <Typography gutterBottom>{task.type}</Typography>
          {task.end_time - task.start_time >= 2 ? (
            <>
              <Typography
                gutterBottom
                variant='subtitle1'
                className={classes.smallerText}
              >
                {task.location}
              </Typography>
              <Typography
                gutterBottom
                variant='subtitle1'
                className={classes.smallerText}
              >
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
      <UpdateModal
        open={open}
        handleClose={handleClose}
        updateTasksList={updateTasksList}
        hasTaskConflict={hasTaskConflict}
        driver={driver}
        day={dayNum}
        week={week}
        task={task}
      />
    </>
  );
};

export default Card;
