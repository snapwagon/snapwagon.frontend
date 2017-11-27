/* eslint-disable no-undef */

import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard from '../Dashboard.jsx';

describe('<Dashboard /> snapshots', () => {
  test('renders', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

