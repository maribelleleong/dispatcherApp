import React from 'react';
// import { MorphIcon } from 'react-svg-buttons';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  smallerWidth: {
    width: '50px',
  },
});

export const WeekSelection = () => {
  const classes = useStyles();

  return (
    <Box display='flex'>
      <Box alignSelf='center'>
        <NavigateBeforeIcon />
      </Box>
      <Typography variant='h6' gutterBottom>
        Week{' '}
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
      </Typography>

      <Box alignSelf='center'>
        <NavigateNextIcon />
      </Box>
      {/* <MorphIcon type='arrowLeft' size={50} thickness={2} color='#dd6e78' /> */}
      {/* <MorphIcon type='arrowRight' size={50} thickness={2} color='#dd6e78' /> */}
    </Box>
  );
};
