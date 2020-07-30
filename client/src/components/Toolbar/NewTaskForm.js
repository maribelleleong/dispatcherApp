import React, { useState } from 'react';
import styles from './styles';
import { dayObj, jobTypes } from '../../helpers/constantObj';
import AlertTag from '../layout/AlertTag';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles(styles);

const NewTaskForm = ({
  drivers,
  driver,
  changeInput,
  changeTimeInput,
  handleSubmit,
  handleOverwrite,
  handleCancel,
  error,
  onClose,
  timeError,
  state,
}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  // const [openAlert, setOpenAlert] = useState
  return (
    <div style={modalStyle} className={classes.formPaper}>
      <h2 className={classes.titleMargin} id='simple-modal-title'>
        Create Task Form
      </h2>
      <form onSubmit={handleSubmit}>
        {timeError && <AlertTag openAlert={timeError} onClose={onClose} />}
        <TextField
          required
          id='driver'
          select
          label='Driver'
          name='driver'
          value={state.driver}
          onChange={changeInput}
          className={`${classes.inputMargin} ${classes.largerWidth}`}
        >
          {drivers.map((driver) => (
            <MenuItem key={driver} value={driver}>
              {driver}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <TextField
          required
          className={`${classes.inputMargin} ${classes.smallerWidth}`}
          id='week'
          label='Week'
          name='week'
          type='number'
          InputProps={{ inputProps: { min: 1, max: 52 } }}
          InputLabelProps={{
            shrink: true,
          }}
          value={state.week}
          onChange={changeInput}
        />
        <TextField
          required
          id='day'
          select
          label='Day'
          name='day'
          value={state.day}
          onChange={changeInput}
          className={`${classes.inputMargin} ${classes.largerWidth}`}
        >
          {Object.keys(dayObj).map((day) => (
            <MenuItem key={day} value={dayObj[day]}>
              {day}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <TextField
          required
          className={`${classes.inputMargin} ${classes.smallerWidth}`}
          id='startTime'
          name='startTime'
          label='Start Time'
          type='number'
          InputProps={{ inputProps: { min: 0, max: 23 } }}
          InputLabelProps={{
            shrink: true,
          }}
          value={state.startTime}
          onChange={changeTimeInput}
        />

        <TextField
          required
          className={`${classes.inputMargin} ${classes.smallerWidth}`}
          id='end-time'
          name='endTime'
          label='End Time'
          type='number'
          InputProps={{ inputProps: { min: 1, max: 24 } }}
          InputLabelProps={{
            shrink: true,
          }}
          value={state.endTime}
          onChange={changeTimeInput}
        />
        <br />
        <TextField
          required
          id='job-type'
          select
          label='Job Type'
          name='type'
          value={state.type}
          onChange={changeInput}
          className={`${classes.inputMargin} ${classes.smallerWidth}`}
        >
          {jobTypes.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <TextField
          required
          name='location'
          id='location'
          label='Location'
          onChange={changeInput}
          className={classes.inputMargin}
          value={state.location}
        />
        <br />
        {!error && (
          <Button
            color='primary'
            variant='outlined'
            className={classes.inputMargin}
            type='submit'
            startIcon={<AddIcon />}
          >
            Create
          </Button>
        )}
        {error && (
          <>
            <Typography className={classes.inputMargin}>
              New task has time conflicts with existing task(s). Would you like
              to overwrite?
            </Typography>
            <Button
              color='primary'
              variant='outlined'
              className={classes.inputMargin}
              onClick={handleOverwrite}
              startIcon={<EditIcon />}
            >
              Overwrite
            </Button>
            <Button
              variant='outlined'
              className={classes.inputMargin}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </>
        )}
      </form>
    </div>
  );
};

export default NewTaskForm;
