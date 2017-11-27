/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Circle from '../Circle.jsx';

storiesOf('Circle', module)
  .add('renders the component', () => (
    <Circle />
  ));
