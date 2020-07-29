import React, { useState } from 'react';
import styles from './styles';

import { ExportToCsv } from 'export-to-csv';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';

import { makeStyles } from '@material-ui/core/styles';
import { generateCSVData } from '../../helpers/generateCSVData';

const useStyles = makeStyles(styles);

const dayIntervalArr = [2, 4, 7, 14, 28];

const ReportFormDialog = ({
  tasksList,
  drivers,
  driver,
  open,
  handleClose,
}) => {
  console.log('driver is ', driver);
  const classes = useStyles();

  const [state, setState] = useState({
    dayInterval: dayIntervalArr[0],
    driver,
  });

  const changeInput = (e) => {
    const inputName = e.target.name;
    const inputVal = e.target.value;

    setState((prev) => ({ ...prev, [inputName]: inputVal }));
  };

  const printRandom = () => {
    const csvArr = generateCSVData(state.dayInterval, tasksList[state.driver]);

    const options = {
      filename: `NinjaDispatcher_Report`,
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: true,
      title: `${state.driver} - Summary Report with interval ${state.dayInterval} days`,
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
    };

    const csvExporter = new ExportToCsv(options);

    csvExporter.generateCsv(csvArr);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      maxWidth={'md'}
      aria-labelledby='dispatcher-report-form'
    >
      <DialogTitle id='Report-Form__title'>Report Form</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To download a report, please select a driver and a day interval.
        </DialogContentText>

        <TextField
          id='driver-selection'
          select
          label='Driver'
          name='driver'
          value={state.driver ? state.driver : drivers[0]}
          onChange={changeInput}
          variant='outlined'
          className={`${classes.moreRightMargin} ${classes.largerWidth}`}
        >
          {drivers.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id='outlined-select-timeInterval'
          select
          label='Days'
          name='dayInterval'
          value={state.dayInterval}
          onChange={changeInput}
          variant='outlined'
        >
          {dayIntervalArr.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <Button
          variant='contained'
          color='primary'
          startIcon={<GetAppIcon />}
          className={` ${classes.topMargin} ${classes.downloadBtn}`}
          onClick={printRandom}
        >
          Downlaod
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ReportFormDialog;
