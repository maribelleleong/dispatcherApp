import React, { useState } from 'react';
import ReportFormDialog from './ReportFormDialog';
import styles from './styles';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

const DownloadButton = ({ tasksList, drivers, driver }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box display='flex'>
      <Button
        variant='contained'
        color='primary'
        size='large'
        onClick={handleOpen}
        className={`${classes.rightMargin} ${classes.downloadBtn}`}
      >
        Get Report
      </Button>
      <ReportFormDialog
        tasksList={tasksList}
        drivers={drivers}
        driver={driver}
        open={open}
        handleClose={handleClose}
      />
    </Box>
  );
};

export default DownloadButton;
