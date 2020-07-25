import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const dayArr = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const DayList = () => {
  const classes = useStyles();

  return (
    <div>
      {
        <Grid
          container
          spacing={3}
          direction='row'
          justify='flex-end'
          alignItems='center'
        >
          {dayArr.map((value) => (
            <Grid key={value} item xs={12 / 7}>
              <Paper className={classes.paper}>{value}</Paper>
            </Grid>
          ))}
        </Grid>
      }
    </div>
  );
};

export default DayList;
