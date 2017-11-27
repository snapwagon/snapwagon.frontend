import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

/*
  Icon wraps SVG in a span element
  in order to use Icons as direct children
  of CSSTransitionGroup to prevent IE from
  breaking on element.classList in strict mode.
*/
const Icon = (props) => {
  return (
    <span
      style={props.containerStyles}
      className={cx(props.containerClassNames)}
    >
      <svg
        className={props.svgClassNames}
        style={props.svgStyles}
        height={props.height}
        width={props.width}
        viewBox={props.viewBox}
      >
        {props.children}
      </svg>
    </span>
  );
};

const {
  any,
  arrayOf,
  bool,
  node,
  objectOf,
  oneOfType,
  string
} = PropTypes;

Icon.propTypes = {
  containerClassNames: oneOfType([
    string,
    objectOf(bool)
  ]),
  containerStyles: any, // eslint-disable-line react/forbid-prop-types
  svgClassNames: oneOfType([
    string,
    objectOf(bool)
  ]),
  svgStyles: any, // eslint-disable-line react/forbid-prop-types
  children: oneOfType([
    arrayOf(node),
    node
  ]).isRequired,
  height: string.isRequired,
  width: string.isRequired,
  viewBox: string.isRequired
};

Icon.defaultProps = {
  containerClassNames: undefined,
  containerStyles: undefined,
  svgClassNames: undefined,
  svgStyles: undefined
};

export default Icon;
