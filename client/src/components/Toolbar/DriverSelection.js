import React from 'react';
import styles from './styles';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const DriverSelection = ({ drivers, driver, setDriver }) => {
  const classes = useStyles();

  const MenuItems = drivers.map((driver) => (
    <MenuItem key={driver} value={driver}>
      {driver}
    </MenuItem>
  ));
  return (
    <div>
      <TextField
        id='driver-selection'
        select
        label='Driver'
        name='driver'
        value={driver}
        variant='outlined'
        value={driver}
        onChange={setDriver}
        className={classes.largerWidth}
      >
        {drivers.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export default DriverSelection;
