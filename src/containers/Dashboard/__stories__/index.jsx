/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Dashboard from '../Dashboard.jsx';

storiesOf('Dashboard', module)
  .add('renders the component', () => (
    <Dashboard />
  ));
