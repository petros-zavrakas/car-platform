import React from "react";
import { Fetching } from "./IsFetching.styles";
import loader from "../../../assets/images/loader.svg";

const IsFetching = () => {
  return (
    <Fetching>
      <img src={loader} alt="loader" />
    </Fetching>
  );
};

export default IsFetching;
