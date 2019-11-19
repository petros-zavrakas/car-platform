import React from "react";
import { formatNumberToPrice, formatDate } from "../../../common/utils/utils";
import { Container } from "./FinancialInfo.styles";

const FinancialInfo = ({ vehicle }) => {
  const info = vehicle.financialDetails;

  return (
    <Container>
      <p>
        <small>Purchased</small>
        <br />
        {formatNumberToPrice(info.purchasePrice)}{" "}
        <small>
          ({formatDate(info.purchaseDate, "DD/MM/YYYY")},{" "}
          {info.purchaseLocation})
        </small>
        <br />
        <small>{info.paymentDonePercentage}% payments to buyer done</small>
      </p>

      <p>
        <small>Sold</small>
        <br />
        {formatNumberToPrice(info.sellingPrice)}{" "}
        <small>
          ({formatDate(info.sellingDate, "DD/MM/YYYY")}, {info.sellingLocation})
        </small>
        <br />
        <small>{info.sellingDonePercentage}% payments from seller done</small>
      </p>
    </Container>
  );
};

export default FinancialInfo;
