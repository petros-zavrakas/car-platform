import { vehicle } from "./VehicleReducer";
import types from "./VehicleConstants";

describe("Vehicle Reducer", () => {
  it("Should return the default state", () => {
    const defaultState = vehicle({}, {});
    expect(defaultState).toEqual({});
  });

  it("Should return a new state", () => {
    const state = {
      car: { id: 1 }
    };
    const action = {
      type: types.FETCH_VEHICLE_SUCCESS,
      payload: state
    };
    const newState = vehicle({}, action);
    expect(newState.id).toEqual(state.car.id);
  });
});
