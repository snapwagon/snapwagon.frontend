/* eslint-disable no-undef */

import React from 'react';
import renderer from 'react-test-renderer';

import Circle from '../Circle.jsx';

describe('<Circle /> snapshots', () => {
  test('renders', () => {
    const tree = renderer.create(<Circle />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

