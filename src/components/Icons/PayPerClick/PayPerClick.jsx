import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const PayPerClick = (props) => {
  return (
    <Icon
      height={props.height}
      viewBox={props.viewBox}
      width={props.width}
    >
      <svg width="59" height="59" viewBox="0 0 59 59" xmlns="http://www.w3.org/2000/svg"><path d="M45.637 15.943c-9.864 0-13.364 6.417-13.364 11.913v19.23c0 5.496 3.5 11.914 13.364 11.914C55.5 59 59 52.582 59 47.087v-19.23c0-5.497-3.5-11.914-13.363-11.914zM57.12 47.087c0 1.156-.223 4.105-2.28 6.52-1.983 2.33-5.08 3.51-9.203 3.51-4.124 0-7.22-1.18-9.205-3.51-2.056-2.415-2.278-5.364-2.278-6.52v-19.23c0-1.157.222-4.106 2.278-6.52 1.984-2.33 5.08-3.51 9.205-3.51 4.123 0 7.22 1.18 9.204 3.51 2.057 2.414 2.28 5.363 2.28 6.52v19.23zM37.543 1.883c3.944 0 7.152 3.212 7.152 7.16v4.075c0 .52.42.942.94.942s.94-.422.94-.942V9.042c0-4.986-4.05-9.042-9.032-9.042-4.98 0-9.033 4.035-9.033 8.994v25.07c0 3.92-3.207 7.11-7.15 7.11-3.945 0-7.153-3.21-7.153-7.16v-7.49c6.878-.484 12.326-6.24 12.326-13.245C26.533 5.956 20.58 0 13.266 0 5.95 0 0 5.957 0 13.28c0 7.005 5.448 12.76 12.326 13.245v7.49c0 4.987 4.052 9.043 9.033 9.043 4.98 0 9.032-4.035 9.032-8.994V8.994c0-3.92 3.208-7.11 7.152-7.11zM1.88 13.28c0-6.284 5.108-11.397 11.386-11.397S24.65 6.996 24.65 13.28s-5.106 11.396-11.384 11.396c-6.278 0-11.385-5.112-11.385-11.396zm11.383 2.7c-.39 0-.708-.32-.708-.71 0-.52-.42-.942-.94-.942s-.94.422-.94.942c0 1.097.684 2.034 1.648 2.412v.404c0 .52.42.94.94.94s.94-.42.94-.94v-.404c.964-.378 1.65-1.315 1.65-2.412 0-1.816-1.477-2.51-2.187-2.843-.867-.407-1.105-.65-1.105-1.137 0-.39.32-.71.71-.71.39 0 .707.32.707.71 0 .52.42.94.94.94s.94-.42.94-.94c0-1.097-.684-2.035-1.647-2.413v-.403c0-.52-.42-.942-.94-.942s-.94.422-.94.942v.403c-.965.378-1.65 1.316-1.65 2.413 0 1.815 1.477 2.51 2.187 2.842.867.407 1.104.652 1.104 1.138 0 .39-.316.71-.707.71zm9.507-2.7c0-5.246-4.263-9.514-9.504-9.514-2.168 0-4.29.753-5.974 2.12-1.66 1.348-2.83 3.23-3.296 5.304-.114.507.204 1.01.71 1.125.508.115 1.01-.204 1.125-.712.777-3.45 3.904-5.954 7.436-5.954 4.204 0 7.623 3.422 7.623 7.63 0 4.207-3.42 7.63-7.624 7.63-3.532 0-6.66-2.504-7.435-5.954-.113-.508-.617-.827-1.123-.712-.507.114-.825.618-.71 1.125.465 2.072 1.635 3.955 3.294 5.302 1.686 1.368 3.808 2.12 5.976 2.12 5.24 0 9.504-4.267 9.504-9.512zm23.807 23.25v-3.273c1.398-.41 2.422-1.702 2.422-3.232v-4.468c0-1.53-1.025-2.823-2.423-3.23V20.65c0-.52-.42-.94-.94-.94s-.94.42-.94.94v1.676c-1.4.408-2.423 1.7-2.423 3.23v4.47c0 1.53 1.024 2.822 2.422 3.23v3.274h-7.72c-.52 0-.94.42-.94.94s.42.943.94.943h17.32c.52 0 .942-.422.942-.942s-.42-.94-.94-.94h-7.72zm-2.422-6.505v-4.468c0-.818.664-1.483 1.48-1.483.818 0 1.483.665 1.483 1.483v4.468c0 .818-.665 1.484-1.482 1.484s-1.48-.667-1.48-1.485z" fill={props.fillColor} fillRule="evenodd"/></svg>
    </Icon>
  );
};

PayPerClick.propTypes = {
  height: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.string,
  fillColor: PropTypes.string
};

PayPerClick.defaultProps = {
  height: '59',
  viewBox: '0 0 59 59',
  width: '59',
  fillColor: '#000'
};

export default PayPerClick;
