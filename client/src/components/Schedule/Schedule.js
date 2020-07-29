import React from 'react';
import TimeList from './TimeList';
import Week from './Week';

import styles from './styles';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
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
    </Box>
  );
};
// <div className={classes.root}>
{
  /* <Grid container spacing={1}>
        <Grid item xs={1}>
          <TimeList />
        </Grid>
        <Grid item xs={11}>
          {/* <Week tasksOfWeek={tasksOfWeek} driver={driver} week={week} hasTaskConflict={hasTaskConflict}/> */
}
{
  /* <Week */
}
{
  /* {...{ tasksOfWeek, driver, week, updateTasksList, hasTaskConflict }} */
}
{
  /* /> */
}
{
  /* </Grid> */
}
{
  /* </Grid> */
}

{
  /* </div> */
}

//////////////////////////////////////////

export default Schedule;
