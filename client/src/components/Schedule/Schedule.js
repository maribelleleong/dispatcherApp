import React from 'react';
import Grid from '@material-ui/core/Grid';

import DayList from './DayList/DayList';
import TimeList from './TimeList/TimeList';

const Schedule = () => {
  return (
    <Grid container spacing={1}>
      <TimeList />
      <DayList />
    </Grid>
  );
};

export default Schedule;