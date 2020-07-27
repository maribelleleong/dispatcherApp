import React from 'react';
import DriverSelection from './DriverSelection';
import WeekSelection from './WeekSelection';
import DownloadButton from './DownloadButton';
import FormModal from './FormModal';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

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
    >
      <DriverSelection
        drivers={drivers}
        driver={driver}
        setDriver={setDriver}
      />
      <WeekSelection setWeek={setWeek} week={week} />
      <Box display='flex'>
        <DownloadButton className={classes.addMargin} />
        <FormModal
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
