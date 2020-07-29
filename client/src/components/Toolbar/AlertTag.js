import React, { useState } from 'react';

import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';

const AlertTag = ({ openAlert, onClose }) => {
  const [open, setOpen] = React.useState(openAlert);

  return (
    <Collapse in={open}>
      <Alert
        severity='error'
        action={
          <IconButton
            aria-label='close'
            color='inherit'
            size='small'
            onClick={() => {
              setOpen(false);
              onClose();
            }}
          >
            <CloseIcon fontSize='inherit' />
          </IconButton>
        }
      >
        Please provide valid start time and end time!
      </Alert>
    </Collapse>
  );
};

export default AlertTag;
