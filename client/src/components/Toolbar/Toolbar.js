import React from 'react';
import DriverSelection from './DriverSelection';
import WeekSelection from './WeekSelection';
import DownloadButton from './DownloadButton';
import NewTaskButton from './NewTaskButton';
import styles from './styles';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const Toolbar = ({
  drivers,
  driver,
  setDriver,
  setWeek,
  week,
  hasTaskConflict,
  updateTasksList,
}) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction='row'
      alignItems='flex-end'
      justify='space-between'
      className={classes.toolbarMargin}
    >
      <DriverSelection
        drivers={drivers}
        driver={driver}
        setDriver={setDriver}
      />
      <WeekSelection setWeek={setWeek} week={week} />
      <Box display='flex' className={classes.buttonMargin}>
        <DownloadButton className={classes.addMargin} />
        <NewTaskButton
          drivers={drivers}
          driver={driver}
          selectedWeek={week}
          updateTasksList={updateTasksList}
          hasTaskConflict={hasTaskConflict}
        />
      </Box>
    </Grid>
  );
};

export default Toolbar;
