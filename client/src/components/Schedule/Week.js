import React from 'react';
import Day from './Day';
import { dayObj } from '../../helpers/constantObj';

import Grid from '@material-ui/core/Grid';

const Week = ({
  tasksOfWeek,
  driver,
  week,
  updateTasksList,
  hasTaskConflict,
}) => {
  return (
    <Grid container spacing={1} justify='space-around' alignItems='flex-start'>
      {dayObj &&
        Object.keys(dayObj).map((day) => (
          <Day
            key={day}
            day={day}
            dayNum={dayObj[day]}
            dayTasks={tasksOfWeek ? tasksOfWeek[dayObj[day]] : null}
            driver={driver}
            week={week}
            updateTasksList={updateTasksList}
            hasTaskConflict={hasTaskConflict}
          />
        ))}
    </Grid>
  );
};

export default Week;
