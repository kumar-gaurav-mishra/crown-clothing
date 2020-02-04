import React from 'react';
import PropTypes from 'prop-types';
import {Group, Input, FormInputLabel} from './form-input.styles';

const FormInput = ({handleChange, label, ...otherProps}) => (
  <Group>
    <Input type="text" onChange={handleChange} {...otherProps} />
    {label ? <FormInputLabel {...otherProps}>{label}</FormInputLabel> : null}
  </Group>
);
// PropTypes Velidations
FormInput.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
};
export default FormInput;
