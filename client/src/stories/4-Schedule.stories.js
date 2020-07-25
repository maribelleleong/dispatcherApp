import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Toolbar from '../components/Toolbar/Toolbar';
import DayList from '../components/Schedule/DayList/DayList';
import TimeList from '../components/Schedule/TimeList/TimeList';

storiesOf('Schedule', module)
  .add('DayList', () => <DayList />)
  .add('TimeLst', () => <TimeList />);