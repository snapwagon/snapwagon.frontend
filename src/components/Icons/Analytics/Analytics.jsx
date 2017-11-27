import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const Analytics = (props) => {
  return (
    <Icon
      height={props.height}
      viewBox={props.viewBox}
      width={props.width}
      containerClassNames={props.containerClassNames}
      containerStyles={props.containerStyles}
    >
      <path d="M56.76 0H2.24C1.005 0 0 1.007 0 2.244V43.65c0 1.24 1.005 2.245 2.24 2.245h20.563v7.218h-8.88c-.52 0-.942.423-.942.944 0 .52.423.943.943.943h31.154c.52 0 .942-.422.942-.943 0-.52-.423-.944-.943-.944h-8.88v-7.218H56.76c1.235 0 2.24-1.006 2.24-2.244V2.245C59 1.007 57.995 0 56.76 0zM34.314 53.113h-9.628v-7.218h9.628v7.218zm22.803-9.462c0 .195-.163.36-.357.36H2.24c-.194 0-.357-.165-.357-.36V2.245c0-.194.163-.357.357-.357h54.52c.194 0 .357.163.357.357V43.65zm-2.953-7.317H4.836c-.52 0-.942.422-.942.943 0 .52.422.944.942.944h49.328c.52 0 .942-.423.942-.944 0-.52-.422-.943-.942-.943zM13.808 33.19h5.022c.52 0 .94-.424.94-.945V18.56c0-.522-.42-.944-.94-.944h-5.022c-.52 0-.94.422-.94.943v13.685c0 .52.42.944.94.944zm.942-13.687h3.138v11.8H14.75v-11.8zm7.846 13.686h5.02c.52 0 .942-.424.942-.945v-18.15c0-.52-.42-.942-.94-.942h-5.022c-.52 0-.942.422-.942.943v18.15c0 .52.422.943.942.943zm.94-18.15h3.14v16.262h-3.14V15.04zm7.847 18.15h5.02c.52 0 .943-.424.943-.945V9.875c0-.52-.422-.942-.942-.942h-5.02c-.52 0-.943.422-.943.943v22.37c0 .52.423.943.943.943zm.94-22.37h3.14v20.482h-3.14V10.82zm7.847 22.37h5.02c.52 0 .943-.424.943-.945V22.9c0-.52-.422-.942-.942-.942h-5.02c-.52 0-.94.422-.94.943v9.345c0 .52.42.944.94.944zm.942-9.346h3.138v7.458h-3.138v-7.458z" fill={props.fillColor} fillRule="evenodd"/>
    </Icon>
  );
};

Analytics.propTypes = {
  height: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.string,
  fillColor: PropTypes.string,
  containerClassNames: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.bool)
  ]),
  containerStyles: PropTypes.any, // eslint-disable-line react/forbid-prop-types
};

Analytics.defaultProps = {
  height: '55',
  viewBox: '0 0 59 55',
  width: '59',
  fillColor: '#000',
  containerClassNames: undefined,
  containerStyles: undefined,
};

export default Analytics;
