/* eslint-disable no-undef */

import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../Home.jsx';

describe('<Home /> snapshots', () => {
  test('renders', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

