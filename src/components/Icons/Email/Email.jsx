import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';

const Email = (props) => {
  return (
    <Icon
      height={props.height}
      viewBox={props.viewBox}
      width={props.width}
      containerClassNames={props.containerClassNames}
      containerStyles={props.containerStyles}
    >
      <path d="M58.387 17.32c-.42-.454-1.017-.74-1.682-.74h-5.627V.94c0-.52-.42-.94-.94-.94H8.862c-.52 0-.94.42-.94.94v15.64H2.294c-.665 0-1.262.286-1.682.74-.38.408-.613.954-.613 1.555v37.83C0 57.97 1.03 59 2.295 59h54.41C57.97 59 59 57.97 59 56.705v-37.83c0-.6-.234-1.147-.613-1.556zM8.863 21.275c.52 0 .942-.42.942-.94V1.882h39.39v18.452c0 .52.422.94.942.94s.94-.42.94-.94v-1.872h4.772L30.56 44.8c-.284.297-.66.46-1.06.46s-.776-.163-1.06-.46L3.15 18.464h4.772v1.872c0 .52.42.94.94.94zm47.842 35.84H2.295c-.223 0-.412-.188-.412-.41V19.86L19.098 37.79 3.95 53.566c-.36.375-.348.97.027 1.33.183.176.418.263.652.263.247 0 .494-.098.68-.29l15.093-15.72 6.68 6.955c.64.67 1.5 1.037 2.417 1.037.918 0 1.776-.368 2.418-1.037l6.68-6.956 5.903 6.148c.186.193.433.29.68.29.235 0 .47-.088.652-.263.375-.36.387-.956.027-1.33l-5.957-6.205 17.214-17.928v36.843c0 .223-.19.412-.412.412zm-7.85-10c-.36-.376-.955-.388-1.33-.028-.375.36-.388.956-.027 1.33l6.193 6.45c.186.194.433.29.68.29.235 0 .47-.086.652-.26.375-.362.388-.958.028-1.333l-6.194-6.45zM18.378 31.13h17.788c1.622 0 2.94-1.32 2.94-2.942 0-.58-.167-1.12-.457-1.575.77-.53 1.278-1.42 1.278-2.424 0-.58-.17-1.12-.46-1.575.773-.53 1.28-1.42 1.28-2.424 0-.578-.17-1.12-.46-1.575.772-.53 1.278-1.42 1.278-2.424 0-1.62-1.32-2.94-2.94-2.94H33.28c.892-1.91 1.372-4.176 1.372-6.543 0-1.62-1.32-2.94-2.94-2.94-1.623 0-2.942 1.32-2.942 2.94 0 3.608-2.935 6.542-6.542 6.542h-3.853c-.52 0-.94.42-.94.94v16c0 .52.42.942.94.942zM30.654 6.707c0-.583.475-1.058 1.06-1.058.583 0 1.057.474 1.057 1.057 0 2.64-.664 5.117-1.87 6.97-.19.29-.204.66-.04.963.165.303.483.492.828.492h6.935c.583 0 1.058.475 1.058 1.06 0 .583-.474 1.057-1.057 1.057h-2.458c-.52 0-.94.42-.94.94s.42.942.94.942h1.638c.584 0 1.06.475 1.06 1.06 0 .583-.476 1.057-1.06 1.057h-1.638c-.52 0-.94.42-.94.94s.42.942.94.942h.82c.583 0 1.058.475 1.058 1.06 0 .583-.475 1.057-1.06 1.057h-.818c-.52 0-.94.42-.94.94s.42.942.94.942c.584 0 1.06.475 1.06 1.06 0 .583-.476 1.057-1.06 1.057H23.17V15.077c4.205-.47 7.484-4.043 7.484-8.37zM19.32 15.132h1.968V29.25h-1.97V15.13z" fill={props.fillColor} fillRule="evenodd" />
    </Icon>
  );
};

Email.propTypes = {
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

Email.defaultProps = {
  height: '59',
  viewBox: '0 0 59 59',
  width: '59',
  fillColor: '#000',
  containerClassNames: undefined,
  containerStyles: undefined,
  svgClassNames: undefined,
  svgStyles: undefined
};

export default Email;
