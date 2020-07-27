import React from 'react';
import Day from './Day';
import { dayObj } from '../../helpers/constantObj';

import Grid from '@material-ui/core/Grid';

const Week = ({ tasksOfWeek }) => {
  return (
    <Grid container spacing={1} justify='space-around' alignItems='flex-start'>
      {dayObj &&
        Object.keys(dayObj).map((day) => (
          <Day
            key={day}
            day={day}
            dayTasks={tasksOfWeek ? tasksOfWeek[dayObj[day]] : null}
          />
        ))}
    </Grid>
  );
};

export default Week;
