import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  smallerWidth: {
    width: '50px',
  },
});

export const WeekSelection = ({ changeWeek, week }) => {
  const classes = useStyles();

  const changeInput = (event) => {
    console.log('change week', event.target.value);
    changeWeek(event.target.value);
  };

  const changeWeekArrow = (type) => {
    console.log(week);
    let weekchg = week;
    if (type == 'left') {
      if (week >= 1) {
        weekchg -= 1;
      }
    } else if (week < 52) {
      weekchg += 1;
    }

    changeWeek(weekchg);
  };

  return (
    <Box display='flex'>
      <Box alignSelf='center'>
        <IconButton onClick={() => changeWeekArrow('left')}>
          <NavigateBeforeIcon />
        </IconButton>
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
          value={week}
          onChange={changeInput}
        />
      </Typography>

      <Box alignSelf='center'>
        <IconButton onClick={() => changeWeekArrow('right')}>
          <NavigateNextIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
