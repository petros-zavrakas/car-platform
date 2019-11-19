import React from "react";
import { Wrap } from "./Wrapper.styles";

const Wrapper = ({ children }) => {
  return <Wrap data-test="wrapperComponent">{children}</Wrap>;
};

export default Wrapper;
