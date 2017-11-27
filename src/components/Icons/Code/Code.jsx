import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const Code = (props) => {
  return (
    <Icon
      height={props.height}
      viewBox={props.viewBox}
      width={props.width}
      containerClassNames={props.containerClassNames}
      containerStyles={props.containerStyles}
    >
      <path d="M21.003 23.712c-.266-.452-.844-.6-1.29-.33L8.745 29.99c-.285.173-.46.484-.46.82 0 .336.175.647.46.818l10.967 6.612c.15.092.317.135.48.135.322 0 .635-.166.81-.466.267-.45.12-1.036-.326-1.305l-9.61-5.793 9.61-5.794c.447-.27.593-.854.327-1.306zm16.994 14.2c.176.3.49.465.81.465.164 0 .33-.043.48-.135l10.968-6.612c.285-.172.46-.482.46-.818 0-.336-.175-.647-.46-.82l-10.967-6.61c-.447-.27-1.025-.122-1.29.33-.267.452-.12 1.037.326 1.306l9.61 5.794-9.61 5.793c-.447.27-.593.854-.327 1.306zm-4.892-14.243L24.33 36.892c-.288.436-.174 1.028.258 1.322.16.11.344.162.524.162.303 0 .6-.148.783-.422L34.67 24.73c.288-.436.174-1.028-.258-1.32-.432-.295-1.017-.178-1.307.26zM58.06 0H.94C.42 0 0 .427 0 .953v52.094c0 .526.42.953.94.953h57.12c.52 0 .94-.427.94-.953V42.882c0-.526-.42-.953-.94-.953-.522 0-.943.426-.943.952v9.212H1.883V9.53h55.234v29.54c0 .527.42.954.942.954.52 0 .94-.427.94-.953V.954C59 .427 58.58 0 58.06 0zM1.882 1.906h34.835v5.718H1.883V1.906zM38.6 7.624V1.906h18.517v5.718H38.6zm9.29-3.876c-.553 0-1.004.456-1.004 1.017 0 .56.45 1.016 1.004 1.016s1.005-.455 1.005-1.015c0-.56-.45-1.017-1.005-1.017zm-5.146 0c-.554 0-1.005.456-1.005 1.017 0 .56.45 1.016 1.004 1.016.553 0 1.004-.455 1.004-1.015 0-.56-.45-1.017-1.004-1.017zm10.293 0c-.553 0-1.004.456-1.004 1.017 0 .56.45 1.016 1.004 1.016s1.004-.455 1.004-1.015c0-.56-.45-1.017-1.003-1.017z" fill={props.fillColor} fillRule="evenodd"/>
    </Icon>
  );
};

Code.propTypes = {
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

Code.defaultProps = {
  height: '32',
  viewBox: '0 0 32 32',
  width: '32',
  fillColor: '#000',
  containerClassNames: undefined,
  containerStyles: undefined,
  svgClassNames: undefined,
  svgStyles: undefined
};

export default Code;
