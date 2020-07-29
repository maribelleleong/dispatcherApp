import React from 'react';
import styles from './styles';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

// generate ['00:00' .. '23:00']
const timeArr = () => {
  return [...Array(24).keys()].map((time) =>
    time <= 9 ? `0${time}:00` : `${time}:00`
  );
};

const TimeList = () => {
  const classes = useStyles();

  return (
    <>
      <Paper
        className={classes.paper}
        style={{
          gridRow: '1',
          gridColumn: '1',
        }}
      >
        {'Time'}
      </Paper>
      {timeArr().map((time, i) => (
        <Paper
          className={classes.paper}
          style={{
            gridRow: `${2 + i}`,
            gridColumn: '1',
          }}
        >
          {time}
        </Paper>
      ))}
    </>
  );
};

export default TimeList;
