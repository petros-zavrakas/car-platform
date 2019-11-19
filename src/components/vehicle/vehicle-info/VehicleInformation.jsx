import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { List } from "./VehicleInformation.styles";

const VehicleInformation = ({ vehicle }) => {
  return (
    <List>
      <Row noGutters>
        <Col xs={6}>Make:</Col>
        <Col xs={6}>{vehicle.make || "-"}</Col>
      </Row>
      <Row noGutters>
        <Col xs={6}>Model:</Col>
        <Col xs={6}>{vehicle.model || "-"}</Col>
      </Row>
      <Row noGutters>
        <Col xs={6}>Trim:</Col>
        <Col xs={6}>{vehicle.trim || "-"}</Col>
      </Row>
      <Row noGutters>
        <Col xs={6}>Engine type:</Col>
        <Col xs={6}>{vehicle.engineType || "-"}</Col>
      </Row>
    </List>
  );
};

export default VehicleInformation;
