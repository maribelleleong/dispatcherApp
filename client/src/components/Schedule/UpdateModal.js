import React, { useState } from 'react';
import UpdateForm from './UpdateForm';

import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const UpdateModal = ({
  open,
  handleClose,
  driver,
  week,
  day,
  task,
  updateTasksList,
  hasTaskConflict,
}) => {
  const [state, setState] = useState({
    driver,
    week,
    day,
    startTime: task.start_time,
    endTime: task.end_time,
    type: task.type,
    location: task.location,
    oldTaskInfo: { week, day, id: task.id },
  });
  const [error, setError] = useState(false);
  const [timeError, setTimeError] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Number(state.endTime) <= Number(state.startTime)) {
      setTimeError(true);
      return;
    }

    if (
      hasTaskConflict(
        state.driver,
        state.week,
        state.day,
        state.startTime,
        state.endTime,
        true,
        task.id
      )
    ) {
      setError(true);
    } else {
      try {
        await submitPostRequest();
        handleClose();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleReplace = async () => {
    try {
      await submitPostRequest();
      setError(false);
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      const res = await axios.post('/tasks/delete', { ...state, id: task.id });
      updateTasksList(res.data);
      handleClose();
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    setError(false);
    reset();
  };

  const onClose = () => {
    setTimeError(false);
  };

  const submitPostRequest = async () => {
    const res = await axios.post('/tasks', {
      ...state,
      update: true,
    });

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
      driver,
      week,
      day,
      startTime: task.start_time,
      endTime: task.end_time,
      type: task.type,
      location: task.location,
    }));
  };

  const body = (
    <UpdateForm
      {...{
        changeInput,
        changeTimeInput,
        handleSubmit,
        handleReplace,
        handleDelete,
        handleCancel,
        driver,
        state,
        error,
        timeError,
        onClose,
      }}
    />
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='update-form-modal'
        aria-describedby='modal-for-displaying-update-form'
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>{body}</Fade>
      </Modal>
    </div>
  );
};

export default UpdateModal;
