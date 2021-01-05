import React from "react";
import * as sc from "./with-spinner.styles";

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <sc.SpinnerOverlay>
      <sc.SpinnerContainer />
    </sc.SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
