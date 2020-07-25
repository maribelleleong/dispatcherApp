import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const DriverSelection = ({ drivers, driver, setDriver }) => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  const MenuItems = drivers.map((driver) => (
    <MenuItem value={driver}>{driver}</MenuItem>
  ));
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id='demo-simple-select-label'>Driver</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={driver}
          onChange={(event) => setDriver(event.target.value)}
        >
          {MenuItems}
        </Select>
      </FormControl>
    </div>
  );
};

export default DriverSelection;
