import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const Devices = (props) => {
  return (
    <Icon
      height={props.height}
      viewBox={props.viewBox}
      width={props.width}
      containerClassNames={props.containerClassNames}
      containerStyles={props.containerStyles}
    >
      <path d="M31.822 38.468c.52 0 .942-.42.942-.94s-.422-.943-.942-.943h-29.8c-.074 0-.14-.065-.14-.14V2.024c0-.075.066-.14.14-.14h45.415c.074 0 .14.065.14.14v16.57c0 .52.42.942.94.942s.943-.422.943-.942V2.023C49.46.907 48.552 0 47.437 0H2.023C.907 0 0 .907 0 2.023v34.423c0 1.115.907 2.022 2.023 2.022h16.97v5.686h-7.24c-.52 0-.94.422-.94.942s.42.94.94.94h20.07c.52 0 .94-.42.94-.94s-.42-.942-.94-.942h-1.357v-5.686h1.356zm-3.24 5.686h-7.705v-5.686h7.706v5.686zm3.24-13.95H4.707c-.52 0-.94.422-.94.942s.42.942.94.942h27.115c.52 0 .942-.422.942-.942s-.422-.94-.942-.94zm25.155-8.787H36.67c-1.116 0-2.023.908-2.023 2.023v33.537c0 1.116.907 2.023 2.023 2.023h20.307C58.093 59 59 58.093 59 56.977V23.44c0-1.115-.907-2.023-2.023-2.023zm-20.447 5.65h20.587v22.518H36.53v-22.52zm.14-3.767h20.307c.075 0 .14.066.14.14v1.743H36.53V23.44c0-.074.065-.14.14-.14zm20.307 33.817H36.67c-.075 0-.14-.066-.14-.14v-5.51h20.587v5.51c0 .074-.065.14-.14.14zm-8.27-3.766H44.94c-.52 0-.94.422-.94.942s.42.942.94.942h3.766c.52 0 .942-.422.942-.942s-.42-.94-.942-.94z" fill={props.fillColor} fillRule="evenodd" />
    </Icon>
  );
};

Devices.propTypes = {
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

Devices.defaultProps = {
  height: '59',
  viewBox: '0 0 59 59',
  width: '59',
  fillColor: '#eee',
  containerClassNames: undefined,
  containerStyles: undefined,
  svgClassNames: undefined,
  svgStyles: undefined
};

export default Devices;
