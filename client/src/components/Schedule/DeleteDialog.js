import React from 'react';
import styles from './styles';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const DeleteDialog = ({ open, handleClose, handleDelete }) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>{'Delete task?'}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Are you sure you want to delete this task? This task will be deleted
          immediately. You can't undo this action.
        </DialogContentText>
        <Button
          variant='outlined'
          onClick={() => {
            handleDelete();
            handleClose();
          }}
          color='secondary'
        >
          Delete
        </Button>
        <Button
          className={classes.inputMargin}
          variant='outlined'
          onClick={handleClose}
          color='primary'
          autoFocus
        >
          Cancel
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteDialog;
