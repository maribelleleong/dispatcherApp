import React from 'react';
import Grid from '@material-ui/core/Grid';

import DayList from './DayList';
import TimeList from './TimeList';

const Schedule = () => {
  return (
    <Grid container spacing={1}>
      <TimeList />
      <DayList />
    </Grid>
  );
};

export default Schedule;
