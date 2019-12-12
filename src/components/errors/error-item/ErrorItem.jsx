import React from "react";

const ErrorItem = ({ item: error }) => {
  return <span>{error.message}</span>;
};

export default ErrorItem;
