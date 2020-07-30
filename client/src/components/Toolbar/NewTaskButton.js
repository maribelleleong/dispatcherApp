import React, { useState } from 'react';
import NewTaskForm from './NewTaskForm';
import styles from './styles';

import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const NewTaskButton = ({
  drivers,
  driver,
  selectedWeek,
  hasTaskConflict,
  updateTasksList,
}) => {
  const classes = useStyles();

  const [state, setState] = useState({
    driver,
    week: selectedWeek,
    day: 1,
    startTime: 0,
    endTime: 1,
    location: '',
    type: '',
  });
  const [error, setError] = useState(false);
  const [timeError, setTimeError] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const changeInput = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setState((prev) => ({ ...prev, [inputName]: inputValue }));
  };

  const changeTimeInput = (e) => {
    const inputName = e.target.name;
    const inputValue = Number(e.target.value);

    setState((prev) => ({ ...prev, [inputName]: inputValue }));
  };

  // action for Submit btn
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Number(state.endTime) <= Number(state.startTime)) {
      setTimeError(true);
      return;
    }

    // check conflict
    if (
      hasTaskConflict(
        state.driver,
        state.week,
        state.day,
        state.startTime,
        state.endTime,
        false
      )
    ) {
      setError(true);
    } else {
      try {
        await submitPostRequest();
        setOpen(false);
        setTimeError(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  // action for Overwrite btn
  const handleOverwrite = async () => {
    if (Number(state.endTime) <= Number(state.startTime)) {
      setTimeError(true);
      return;
    }

    try {
      await submitPostRequest();
      setError(false);
      setOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  // action for Cancel btn
  const handleCancel = () => {
    setError(false);
    setTimeError(false);
    reset();
  };

  // onClose for AlertTag
  const onClose = () => {
    setTimeError(false);
  };

  const submitPostRequest = async () => {
    const res = await axios.post('/tasks', state);

    if (res.status === 200) {
      updateTasksList(res.data);
      reset();
      return Promise.resolve();
    } else {
    }
    return Promise.reject(new Error('Problem submitting request'));
  };

  const reset = () => {
    setState((prev) => ({
      ...prev,
      driver: '',
      week: 1,
      day: 1,
      startTime: 0,
      endTime: 1,
      location: '',
      type: '',
    }));
  };

  const body = (
    <NewTaskForm
      {...{
        drivers,
        driver,
        changeInput,
        changeTimeInput,
        handleSubmit,
        handleOverwrite,
        handleCancel,
        error,
        timeError,
        onClose,
        state,
      }}
    />
  );

  return (
    <div>
      <Button
        variant='contained'
        color='primary'
        onClick={handleOpen}
        className={classes.createBtn}
        size='large'
      >
        Create Task
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  );
};

export default NewTaskButton;
