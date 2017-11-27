/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Home from '../Home.jsx';

storiesOf('Home', module)
  .add('renders the component', () => (
    <Home />
  ));
