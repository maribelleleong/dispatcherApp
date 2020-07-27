import React from 'react';
import styles from './styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

// generate ['00:00' .. '23:00']
const timeArr = () => {
  return [...Array(24).keys()].map((time) =>
    time <= 9 ? `0${time}:00` : `${time}:00`
  );
};

const TimeList = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={1} justify='flex-start' alignItems='flex-start'>
      <Grid key={0} item xs>
        <Paper className={classes.paper}>{'Time'}</Paper>
      </Grid>
      {timeArr().map((value) => (
        <Grid key={value} item xs>
          <Paper className={classes.paper}>{value}</Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default TimeList;
