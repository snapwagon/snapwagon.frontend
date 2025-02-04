import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const Customer = (props) => {
  return (
    <Icon
      height={props.height}
      viewBox={props.viewBox}
      width={props.width}
      containerClassNames={props.containerClassNames}
      containerStyles={props.containerStyles}
    >
      <path d="M29.5 18.58c5.123 0 9.29-4.168 9.29-9.29C38.79 4.167 34.623 0 29.5 0c-5.122 0-9.29 4.167-9.29 9.29 0 5.122 4.168 9.29 9.29 9.29zm0-16.697c4.084 0 7.407 3.323 7.407 7.407s-3.323 7.407-7.407 7.407-7.407-3.323-7.407-7.407 3.323-7.407 7.407-7.407zm0 20.463c7.508 0 13.673 5.86 14.16 13.248H21.9c-.52 0-.94.422-.94.942s.42.94.94.94h22.732c.52 0 .94-.42.94-.94 0-8.863-7.21-16.073-16.072-16.073-8.863 0-16.073 7.21-16.073 16.073 0 .52.422.94.94.94h3.767c.52 0 .942-.42.942-.94s-.422-.942-.942-.942H15.34c.487-7.387 6.652-13.248 14.16-13.248zm-11.874 25.07l-5.165-.868-2.42-4.644c-.162-.31-.483-.506-.834-.506-.35 0-.673.195-.835.506l-2.42 4.644-5.164.867c-.346.058-.63.304-.74.637-.108.334-.022.7.224.95l3.67 3.738-.773 5.18c-.052.347.094.694.378.9.283.207.66.238.973.08l4.688-2.333 4.687 2.334c.133.067.277.1.42.1.195 0 .39-.06.553-.18.284-.206.43-.553.378-.9l-.77-5.18 3.668-3.737c.245-.25.332-.617.223-.95-.108-.334-.393-.58-.74-.638zm-4.825 4.34c-.206.21-.302.506-.26.798l.576 3.856-3.49-1.738c-.265-.132-.576-.132-.84 0l-3.49 1.738.574-3.856c.044-.292-.052-.588-.26-.8l-2.73-2.78 3.845-.647c.29-.05.542-.23.68-.493l1.8-3.458 1.803 3.458c.136.262.388.444.68.493l3.845.646-2.732 2.782zm25.12-4.34l-5.165-.868-2.42-4.644c-.162-.31-.484-.506-.835-.506-.35 0-.673.195-.835.506l-2.42 4.644-5.165.867c-.346.058-.63.304-.74.637-.108.334-.022.7.224.95l3.67 3.738-.773 5.18c-.05.347.095.694.38.9.283.207.658.238.972.08l4.688-2.333 4.688 2.334c.133.067.276.1.42.1.195 0 .39-.06.553-.18.285-.206.43-.553.38-.9l-.773-5.18 3.67-3.737c.245-.25.33-.617.223-.95-.11-.334-.394-.58-.74-.638zm-4.825 4.34c-.207.21-.303.506-.26.798l.575 3.856-3.49-1.738c-.132-.066-.276-.1-.42-.1-.144 0-.288.034-.42.1l-3.49 1.738.574-3.856c.044-.292-.052-.588-.26-.8l-2.73-2.78 3.845-.647c.29-.05.54-.23.678-.493l1.802-3.458 1.802 3.458c.137.262.388.445.68.493l3.845.646-2.732 2.782zm25.86-3.704c-.11-.333-.395-.58-.74-.637l-5.165-.867-2.42-4.644c-.163-.31-.485-.506-.836-.506-.35 0-.672.195-.835.506l-2.42 4.644-5.166.867c-.346.058-.63.304-.74.637-.108.334-.022.7.224.95l3.67 3.738-.773 5.18c-.05.347.094.694.378.9.284.207.66.238.973.08l4.688-2.333 4.688 2.334c.133.067.277.1.42.1.195 0 .39-.06.553-.18.284-.206.43-.553.378-.9l-.772-5.18 3.67-3.737c.246-.25.332-.617.224-.95zm-5.566 3.703c-.207.21-.304.507-.26.8l.575 3.855-3.49-1.738c-.133-.066-.277-.1-.42-.1-.144 0-.288.034-.42.1l-3.49 1.738.574-3.856c.042-.292-.054-.588-.26-.8l-2.732-2.78 3.845-.647c.29-.05.543-.23.68-.493l1.8-3.458 1.804 3.458c.136.262.388.444.68.493l3.844.646-2.73 2.782zM29.5 13.56c1.234 0 2.408-.538 3.22-1.473.342-.392.3-.987-.092-1.328-.392-.342-.987-.3-1.328.092-.455.523-1.11.824-1.8.824s-1.345-.3-1.8-.824c-.34-.393-.936-.434-1.328-.093-.393.34-.434.935-.093 1.327.812.935 1.986 1.472 3.22 1.472z" fill={props.fillColor} fillRule="evenodd" />
    </Icon>
  );
};

Customer.propTypes = {
  height: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.string,
  fillColor: PropTypes.string,
  containerClassNames: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.bool)
  ]),
  containerStyles: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  svgClassNames: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.bool)
  ]),
  svgStyles: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};

Customer.defaultProps = {
  height: '59',
  viewBox: '0 0 59 59',
  width: '59',
  fillColor: '#000',
  containerClassNames: undefined,
  containerStyles: undefined,
  svgClassNames: undefined,
  svgStyles: undefined
};

export default Customer;
