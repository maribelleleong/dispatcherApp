import React from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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

const timeArr = () => {
  return [...Array(24).keys()].map((time) =>
    time <= 9 ? `0${time}:00` : `${time}:00`
  );
};

// const timeList = () => {
//   return (
//     <Grid
//       container
//       spacing={1}
//       direction='column-reverse'
//       justify='flex-start'
//       alignItems='flex-start'
//     >
//       {timeArr().map((value) => (
//         <Grid key={value} item xs={12 / 7}>
//           <Paper className={classes.paper}>{value}</Paper>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

const TimeList = () => {
  const classes = useStyles();

  return (
    <div>
      {
        <Grid
          container
          spacing={1}
          direction='column'
          justify='flex-start'
          alignItems='flex-start'
        >
          <Grid key={0} item xs={12 / 24}>
            <Paper className={classes.paper}>{'Time'}</Paper>
          </Grid>
          {timeArr().map((value) => (
            <Grid key={value} item xs={12 / 24}>
              <Paper className={classes.paper}>{value}</Paper>
            </Grid>
          ))}
        </Grid>
      }
    </div>
  );
};

export default TimeList;
