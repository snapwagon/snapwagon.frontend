/* eslint-disable no-undef */

import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../Header.jsx';

describe('<Header /> snapshots', () => {
  test('renders', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

