import React from "react";
import { Wrap } from "./Wrapper.styles";

const Wrapper = ({ children }) => {
  return (
    <Wrap data-test="wrapperComponent" className="wrapper">
      {children}
    </Wrap>
  );
};

export default Wrapper;
