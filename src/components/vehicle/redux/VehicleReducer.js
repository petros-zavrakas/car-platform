import types from "./VehicleConstants";

const vehicle = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_VEHICLE_SUCCESS:
      return action.payload.car;
    case types.UPDATE_VEHICLES_SUCCESS:
      return {
        ...state,
        ...action.payload.updateCar
      };
    default:
      return state;
  }
};

const vehicleInformation = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export { vehicle, vehicleInformation };
