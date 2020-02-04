import React from 'react';
import PropTypes from 'prop-types';
import {CustomButtonContainer} from './custom-button.styles';

const CustomButton = ({children, ...props}) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);
CustomButton.propTypes = {
  children: PropTypes.string,
};
export default CustomButton;
