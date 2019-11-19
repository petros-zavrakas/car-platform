import React from "react";
import Alert from "react-bootstrap/Alert";

const AlertBox = ({ variant, children, ...rest }) => {
  return (
    <Alert variant={variant} data-test="alertBoxComponent" {...rest}>
      {children}
    </Alert>
  );
};

export default AlertBox;
