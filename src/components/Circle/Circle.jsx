import React from 'react';
import PropTypes from 'prop-types';

const Circle = (props) => {
  return (
    <div
      className="bg-circle-accent"
      style={{
        backgroundColor: props.fillColor
      }}
    >
      {props.children}
    </div>
  );
};

Circle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  fillColor: PropTypes.string
};

Circle.defaultProps = {
  fillColor: '#eee'
};

export default Circle;
