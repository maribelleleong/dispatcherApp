import React from 'react';
import Grid from '@material-ui/core/Grid';

import DayList from './DayList';
import TimeList from './TimeList';

const Schedule = () => {
  return (
    <Grid container spacing={1}>
      <Grid item lg={1}>
        {' '}
        <TimeList />
      </Grid>
      <Grid item lg={11}>
        <DayList />
      </Grid>
    </Grid>
  );
};

export default Schedule;
