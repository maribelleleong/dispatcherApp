import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Navbar from '../components/Layout/Navbar';

storiesOf('Navbar', module).add('Navbar', () => <Navbar />);
