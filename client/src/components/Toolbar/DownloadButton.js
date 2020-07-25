import React from 'react';

import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  smallerWidth: {
    width: '50px',
  },
});
export const DownloadButton = () => {
  const classes = useStyles();

  return (
    <Box display='flex'>
      {/* <Typography variant='h6' gutterBottom>
        <TextField
          className={classes.smallerWidth}
          defaultValue='1'
          id='standard-number'
          type='number'
          InputProps={{ inputProps: { min: 1, max: 52 } }}
          InputLabelProps={{
            shrink: true,
          }}
        />
        Days{' '}
      </Typography>{' '} */}
      <Button variant='contained' color='primary'>
        Download Schedule
      </Button>
    </Box>
  );
};
