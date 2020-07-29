import React from 'react';
import TimeList from './TimeList';
import Week from './Week';

import styles from './styles';

import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const Schedule = ({
  tasksOfWeek,
  driver,
  week,
  updateTasksList,
  hasTaskConflict,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.gridContainer}>
      <TimeList />
      <Week
        tasksOfWeek={tasksOfWeek}
        driver={driver}
        week={week}
        updateTasksList={updateTasksList}
        hasTaskConflict={hasTaskConflict}
      />
    </Box>
  );
};

export default Schedule;
