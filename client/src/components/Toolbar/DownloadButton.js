import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  smallerWidth: {
    width: '50px',
  },
  addMargin: { marginRight: theme.spacing(1) },
}));

export const DownloadButton = () => {
  const classes = useStyles();

  return (
    <Box display='flex'>
      <Button variant='contained' color='primary' className={classes.addMargin}>
        Download Schedule
      </Button>
    </Box>
  );
};
