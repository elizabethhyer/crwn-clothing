import React from "react";

import * as sc from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => {
  return (
    <sc.CustomButtonContainer {...props}>{children}</sc.CustomButtonContainer>
  );
};

export default CustomButton;
