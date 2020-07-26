import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DayList from '../components/Schedule/DayList';
import TimeList from '../components/Schedule/TimeList';
import Schedule from '../components/Schedule/Schedule';
import DaySchedule from '../components/Schedule/DaySchedule';

const PICK_UP = 'pick-up';
const DROP_OFF = 'drop-off';
const OTHER = 'other';

const data = {
  '1': {
    tasks: [
      {
        id: '1001',
        type: DROP_OFF,
        start_time: 9,
        end_time: 12,
        location: 'Costco',
      },
      {
        id: '1002',
        type: OTHER,
        start_time: 12,
        end_time: 14,
      },
      {
        id: '1003',
        type: DROP_OFF,
        start_time: 14,
        end_time: 16,
        location: 'Superstore',
      },
    ],
  },
  '2': {
    tasks: [
      {
        id: '1004',
        type: PICK_UP,
        start_time: 12,
        end_time: 14,
        location: 'McDonald',
      },
      {
        id: '1005',
        type: DROP_OFF,
        start_time: 15,
        end_time: 17,
        location: 'Sobeys',
      },
      {
        id: '1006',
        type: DROP_OFF,
        start_time: 19,
        end_time: 20,
        location: 'Canadian Tire',
      },
    ],
  },
  '3': {
    tasks: [
      {
        id: '1007',
        type: PICK_UP,
        start_time: 12,
        end_time: 14,
        location: 'Staples',
      },
    ],
  },
  '5': {
    tasks: [
      {
        id: '1008',
        type: PICK_UP,
        start_time: 12,
        end_time: 14,
        location: 'Staples',
      },
    ],
  },
  '7': {
    tasks: [
      {
        id: '1009',
        type: PICK_UP,
        start_time: 8,
        end_time: 10,
        location: 'McDonald',
      },
      {
        id: '1010',
        type: DROP_OFF,
        start_time: 15,
        end_time: 17,
        location: 'Sobeys',
      },
      {
        id: '1011',
        type: DROP_OFF,
        start_time: 19,
        end_time: 20,
        location: 'Canadian Tire',
      },
    ],
  },
};

storiesOf('Schedule', module)
  .add('DayList', () => <DayList />)
  .add('TimeList', () => <TimeList />)
  .add('Schedule', () => <Schedule />)
  .add('DaySchedule', () => <DaySchedule tasks={data['1']} />);
