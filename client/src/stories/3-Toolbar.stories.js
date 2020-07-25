import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Toolbar from '../components/Toolbar/Toolbar';
import DriverSelection from '../components/Toolbar/DriverSelection';

const drivers = ['John Doe', 'Fierce Bob', 'Aaron Smith'];

storiesOf('Toolbar', module)
  .add('DriverSelection', () => <DriverSelection drivers={drivers} />)
  .add('Toolbar', () => <Toolbar />);
