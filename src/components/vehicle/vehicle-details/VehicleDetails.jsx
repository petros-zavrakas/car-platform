import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VehicleStatus from "../vehicle-status/VehicleStatus";
import VehicleInformation from "../vehicle-info/VehicleInformation";
import FinancialInfo from "../financial-info/FinancialInfo";
import ResponsiveImage from "../../../components/responive-image/ResponsiveImage";
import { VehicleContainer, Header } from "./VehicleDetails.styles";
import carImg from "../../../assets/images/car.jpg";
import carImg2x from "../../../assets/images/car@2x.jpg";
import carImg3x from "../../../assets/images/car@3x.jpg";

const VehicleDetails = ({ vehicle, onChangeStatus }) => {
  return (
    <VehicleContainer>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
          <ResponsiveImage
            src={carImg}
            images={[carImg, carImg2x, carImg3x]}
            alt={`${vehicle.make} ${vehicle.model}`}
          />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-2">
          <Header>Status</Header>
          <VehicleStatus vehicle={vehicle} onChangeStatus={onChangeStatus} />
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} className="mb-2">
          <Header>Financial Information</Header>
          <FinancialInfo vehicle={vehicle} />
        </Col>
        <Col xs={12} sm={6} md={8} lg={3} className="mb-2">
          <Header>Vehicle Information</Header>
          <VehicleInformation vehicle={vehicle} />
        </Col>
      </Row>
    </VehicleContainer>
  );
};

export default VehicleDetails;
