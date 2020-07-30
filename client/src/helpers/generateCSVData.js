import { DROP_OFF, PICK_UP, OTHER } from './constantObj';

// use day to get the week number
// day = 363, returns 52 (week_number)
const getWeek = (day) => {
  let week_number = Math.floor(day / 7);
  if (day % 7 > 0) {
    week_number += 1;
  }
  return week_number;
};

// use day to get the day number in a week
// day = 15, returns 1 (first day of week 3)
const getDayInWeek = (day) => (day % 7 === 0 ? 7 : day % 7);

// generate an array [1 ... 364], 7 day / 52 week has 364 days
const days = Array.from(Array(364), (_, i) => i + 1);

export const generateCSVData = (dayInterval, data) => {
  const resultArr = [];

  if (!data) {
    return resultArr;
  }

  // chunk [1...364] 1D array into 2D array
  // [1,2,3,4] into [ [1,2], [3,4] ]
  const chunk_days = [];
  while (days.length) chunk_days.push(days.splice(0, dayInterval));

  chunk_days.forEach((arr) => {
    console.log('arr');
    const CSVObj = {};
    CSVObj[`day${arr[0]} - day${arr[arr.length - 1]}`] = {};
    CSVObj[`day${arr[0]} - day${arr[arr.length - 1]}`]['Time-Frame'] = `day${
      arr[0]
    } - day${arr[arr.length - 1]}`;
    CSVObj[`day${arr[0]} - day${arr[arr.length - 1]}`][PICK_UP] = 0;
    CSVObj[`day${arr[0]} - day${arr[arr.length - 1]}`][DROP_OFF] = 0;
    CSVObj[`day${arr[0]} - day${arr[arr.length - 1]}`][OTHER] = 0;

    arr.forEach((day) => {
      if (data[getWeek(day)] && data[getWeek(day)][getDayInWeek(day)]) {
        const tasks = data[getWeek(day)][getDayInWeek(day)].tasks;
        tasks.forEach((task) => {
          if (task.type === PICK_UP) {
            CSVObj[`day${arr[0]} - day${arr[arr.length - 1]}`][PICK_UP]++;
          } else if (task.type === DROP_OFF) {
            CSVObj[`day${arr[0]} - day${arr[arr.length - 1]}`][DROP_OFF]++;
          } else {
            CSVObj[`day${arr[0]} - day${arr[arr.length - 1]}`][OTHER]++;
          }
        });
      }
    });
    resultArr.push(CSVObj[`day${arr[0]} - day${arr[arr.length - 1]}`]);
  });

  return resultArr;
};
