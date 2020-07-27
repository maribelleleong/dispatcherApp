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
  show: {
    visibility: 'visible',
  },
  hide: {
    visibility: 'hidden',
  },
});

const WeekSelection = ({ setWeek, week }) => {
  const classes = useStyles();

  const changeInput = (event) => {
    setWeek(event.target.value);
  };

  const changeWeekArrow = (type) => {
    let changedWeek = week;
    if (type === 'left') {
      if (week >= 1) {
        changedWeek -= 1;
      }
    } else if (week < 52) {
      changedWeek = parseInt(changedWeek) + 1;
    }

    setWeek(changedWeek);
  };

  return (
    <Box display='flex'>
      <Box alignSelf='center'>
        <IconButton
          className={week > 1 ? classes.show : classes.hide}
          onClick={() => changeWeekArrow('left')}
        >
          <NavigateBeforeIcon />
        </IconButton>
      </Box>
      <Typography variant='h6' gutterBottom>
        Week{' '}
        <TextField
          className={classes.smallerWidth}
          defaultValue={week}
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
        <IconButton
          className={week < 52 ? classes.show : classes.hide}
          onClick={() => changeWeekArrow('right')}
        >
          <NavigateNextIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default WeekSelection;
