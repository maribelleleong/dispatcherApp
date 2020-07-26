import React from 'react';
import DriverSelection from './DriverSelection';
import { WeekSelection } from './WeekSelection';
import { DownloadButton } from './DownloadButton';

import Grid from '@material-ui/core/Grid';

const Toolbar = ({ drivers, driver, setDriver, changeWeek, week }) => {
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
      <WeekSelection changeWeek={changeWeek} week={week} />
      <DownloadButton />
    </Grid>
  );
};

export default Toolbar;
