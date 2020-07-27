import React from 'react';
import styles from './styles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
      <FormControl className={classes.formControl}>
        <InputLabel id='demo-simple-select-label'>Driver</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={driver}
          onChange={setDriver}
        >
          {MenuItems}
        </Select>
      </FormControl>
    </div>
  );
};

export default DriverSelection;
