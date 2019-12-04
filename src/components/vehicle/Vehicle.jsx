import React, { useEffect } from "react";
import { connect } from "react-redux";
import VehicleDetails from "./VehicleDetails";
import AddInformationForm from "./add-information-form/AddInformationForm";
import Tasks from "../tasks/Tasks";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { fetchVehicle, updateVehicle } from "./VehicleActions";
import { selectVehicle } from "./VehicleSelectors";
import { VehicleContainer } from "./Vehicle.styles";

const Vehicle = props => {
  const { match, vehicle, onUpdateVehicle, onComponentMount } = props;
  const vehicleId = match.params.id;

  useEffect(() => {
    onComponentMount(vehicleId);
  }, [onComponentMount, vehicleId]);

  const handleUpdateVehicle = ({ currentTarget: input }) => {
    if (input.value === "") return false;

    const update = { [input.id]: input.value };
    const updatedVehicle = { ...vehicle, ...update };

    onUpdateVehicle(updatedVehicle);
  };

  const handleSubmitInformation = information => {
    const updatedVehicle = { ...vehicle, ...information };
    onUpdateVehicle(updatedVehicle);
  };

  return (
    <VehicleContainer data-test="vehicleComponent">
      {vehicle.id && (
        <React.Fragment>
          <VehicleDetails
            vehicle={vehicle}
            onChangeStatus={handleUpdateVehicle}
          />
          <Row>
            <Col xs={12} md={6}>
              <AddInformationForm onSubmit={handleSubmitInformation} />
            </Col>
            <Col xs={12} md={6}>
              <Tasks vehicleId={vehicle.id} />
            </Col>
          </Row>
        </React.Fragment>
      )}
    </VehicleContainer>
  );
};

const mapStateToProps = state => ({
  vehicle: selectVehicle(state)
});

const mapDispatchToProps = dispatch => {
  return {
    onComponentMount: id => {
      dispatch(fetchVehicle(id));
    },
    onUpdateVehicle: vehicle => {
      dispatch(updateVehicle(vehicle));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Vehicle);
