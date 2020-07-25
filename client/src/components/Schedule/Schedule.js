import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import DayList from './DayList';
import TimeList from './TimeList';

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

const Schedule = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <TimeList />
        </Grid>
        <Grid item xs={11}>
          <DayList />
        </Grid>
      </Grid>
    </div>
  );
};

export default Schedule;
