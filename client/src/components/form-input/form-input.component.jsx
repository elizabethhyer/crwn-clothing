import React from "react";

import * as sc from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <sc.GroupContainer>
    <sc.FormInputContainer onChange={handleChange} {...otherProps} />
    {label ? (
      <sc.FormInputLabel
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </sc.FormInputLabel>
    ) : null}
  </sc.GroupContainer>
);

export default FormInput;
