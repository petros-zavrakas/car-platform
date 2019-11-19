import React from "react";
import Select from "../../../common/components/form/Select";
import { StatusForm } from "./VehicleStatus.styles";

const VehicleStatus = ({ vehicle, onChangeStatus }) => {
  const options = {
    physicalStatusList: ["AT_OWNER", "AT_BUYER", "AT_OUR_LOCATION"],
    legalStatusList: ["OWNER", "US", "BUYER"],
    sellingStatusList: ["AVAILABLE", "PENDING", "SOLD", "RESERVED"]
  };

  return (
    <StatusForm>
      <Select
        name="physicalStatus"
        label="Physical Status"
        optionsList={options.physicalStatusList}
        value={vehicle.physicalStatus || undefined}
        onChange={onChangeStatus}
      ></Select>
      <Select
        name="legalStatus"
        label="Legal Status"
        optionsList={options.legalStatusList}
        value={vehicle.legalStatus || undefined}
        onChange={onChangeStatus}
      ></Select>
      <Select
        name="sellingStatus"
        label="Selling Status"
        optionsList={options.sellingStatusList}
        value={vehicle.sellingStatus || undefined}
        onChange={onChangeStatus}
      ></Select>
    </StatusForm>
  );
};

export default VehicleStatus;
