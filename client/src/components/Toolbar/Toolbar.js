import React from 'react';
import DriverSelection from './DriverSelection';
import { WeekSelection } from './WeekSelection';
import { DownloadButton } from './DownloadButton';

import Grid from '@material-ui/core/Grid';

const Toolbar = ({ drivers, driver, setDriver }) => {
  return (
    <Grid
      container
      direction='row'
      alignItems='flex-end'
      justify='space-between'
    >
      <DriverSelection
        drivers={drivers}
        driver={driver}
        setDriver={setDriver}
      />
      <WeekSelection />
      <DownloadButton />
    </Grid>
  );
};

export default Toolbar;
