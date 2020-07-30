import React from 'react';
import Card from './Card';
import styles from './styles';

import Paper from '@material-ui/core/Paper';
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

      taskSlotGrids.push(
        <Card
          key={task.id}
          {...{
            task,
            updateTasksList,
            hasTaskConflict,
            week,
            day,
            dayNum,
            driver,
            i,
          }}
        />
      );
    }
    return taskSlotGrids;
  };

  return (
    <>
      <Paper
        className={classes.paper}
        style={{
          gridRow: '1',
          gridColumn: `${dayNum + 1}`,
          textTransform: 'uppercase',
          fontWeight: 'bold',
          paddingBottom: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <span style={{ paddingTop: '0.6rem' }}>{day}</span>
      </Paper>
      {dayTasks ? getTaskSlots() : null}
    </>
  );
};

export default Day;
