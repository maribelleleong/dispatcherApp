import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DayList from '../components/Schedule/DayList';
import TimeList from '../components/Schedule/TimeList';
import Schedule from '../components/Schedule/Schedule';

storiesOf('Schedule', module)
  .add('DayList', () => <DayList />)
  .add('TimeList', () => <TimeList />)
  .add('Schedule', () => <Schedule />);
