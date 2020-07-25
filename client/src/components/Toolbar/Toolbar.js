import React from 'react';
import DriverSelection from './DriverSelection';
import { WeekSelection } from './WeekSelection';

import Grid from '@material-ui/core/Grid';

const Toolbar = () => {
  const drivers = ['John Doe', 'Fierce Bob', 'Aaron Smith'];

  return (
    <Grid
      container
      direction='row'
      alignItems='flex-end'
      justify='space-between'
    >
      <DriverSelection drivers={drivers} />
      <WeekSelection />
    </Grid>
  );
};

export default Toolbar;
