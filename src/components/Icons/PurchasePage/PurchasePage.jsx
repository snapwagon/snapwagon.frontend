import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const PurchasePage = (props) => {
  return (
    <Icon
      height={props.height}
      viewBox={props.viewBox}
      width={props.width}
    >
      <path d="M19.604 33.19h19.792c.52 0 .94-.423.94-.945V11.72c0-.52-.42-.943-.94-.943h-4.56v-.4c0-2.948-2.394-5.346-5.336-5.346s-5.335 2.4-5.335 5.347v.4h-4.56c-.52 0-.942.422-.942.943v20.525c0 .52.42.944.94.944zm6.444-22.813c0-1.907 1.548-3.46 3.452-3.46 1.903 0 3.452 1.553 3.452 3.46v.4h-6.904v-.4zM56.76 0H2.24C1.005 0 0 1.007 0 2.244V43.65c0 1.24 1.005 2.245 2.24 2.245h20.563v7.218h-8.88c-.52 0-.942.423-.942.944 0 .52.423.943.943.943h31.154c.52 0 .942-.422.942-.943 0-.52-.423-.944-.943-.944h-8.88v-7.218H56.76c1.235 0 2.24-1.006 2.24-2.244V2.245C59 1.007 57.995 0 56.76 0zM34.314 53.113h-9.63v-7.218h9.63v7.218zm-13.768-40.45h3.62v1.573c0 .52.42.943.94.943s.942-.423.942-.944v-1.572h6.904v1.572c0 .52.42.943.94.943.522 0 .943-.423.943-.944v-1.572h3.62v18.638h-17.91V12.664zm36.57 30.988c0 .195-.163.36-.356.36H2.24c-.194 0-.357-.165-.357-.36V2.245c0-.194.163-.357.357-.357h54.52c.193 0 .357.163.357.357V43.65zm-2.952-7.317H4.836c-.52 0-.942.422-.942.944 0 .52.422.943.942.943h49.328c.52 0 .94-.422.94-.943 0-.522-.42-.944-.94-.944z" fill={props.fillColor} fillRule="evenodd" />
    </Icon>
  );
};

PurchasePage.propTypes = {
  height: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.string,
  fillColor: PropTypes.string,
};

PurchasePage.defaultProps = {
  height: '55',
  viewBox: '0 0 59 55',
  width: '59',
  fillColor: '#000'
};

export default PurchasePage;
