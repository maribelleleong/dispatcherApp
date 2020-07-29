import React from 'react';
import Day from './Day';
import { dayObj } from '../../helpers/constantObj';

const Week = ({
  tasksOfWeek,
  driver,
  week,
  updateTasksList,
  hasTaskConflict,
}) => {
  return (
    <>
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
    </>
  );
};

export default Week;
