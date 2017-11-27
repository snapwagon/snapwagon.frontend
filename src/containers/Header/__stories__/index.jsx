/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Header from '../Header.jsx';

storiesOf('Header', module)
  .add('renders the component', () => (
    <Header />
  ));
