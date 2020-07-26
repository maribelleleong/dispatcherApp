import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

// generate ['00:00' .. '23:00']
const timeArr = () => {
  return [...Array(24).keys()].map((time) =>
    time <= 9 ? `0${time}:00` : `${time}:00`
  );
};

const dayObj = {
  Sunday: 1,
  Monday: 2,
  Tuesday: 3,
  Wednesday: 4,
  Thursday: 5,
  Friday: 6,
  Saturday: 7,
};

const generateGrids = () => {
  let generatedGrids;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 25; j++) {}
  }
};

const Display = () => {
  const classes = useStyles();

  return <div></div>;
};

export default Display;
