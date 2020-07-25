import React from 'react';
import Grid from '@material-ui/core/Grid';

import DayList from './DayList';
import TimeList from './TimeList';

const Schedule = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xl={2}>
        <TimeList />
      </Grid>
      <Grid item xl={10}>
        <DayList />
      </Grid>
    </Grid>
  );
};

export default Schedule;
