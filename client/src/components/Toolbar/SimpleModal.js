import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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

const SimpleModal = () => {
  const [state, setstate] = useState({
    name: '',
  });
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const changeinput = (event) => {
    let inputName = event.target.name;
    let inputValue = event.target.value;

    // switch(inputName){
    //   case "name":

    //   break;
    // }
    setstate({
      ...state,
      [inputName]: inputValue,
    });
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id='simple-modal-title'>Text in a modal</h2>
      <p id='simple-modal-description'>
        {state.name}
        <TextField
          required
          name='name'
          id='filled-required'
          label='Required'
          defaultValue={state.name}
          variant='filled'
          onChange={changeinput}
        />
      </p>
    </div>
  );

  return (
    <div>
      {/* <button type='button' onClick={handleOpen}> */}
      <Button variant='contained' color='primary' onClick={handleOpen}>
        Open Modal
      </Button>
      {/* </button> */}
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

export default SimpleModal;
