import * as selectors from "./VehicleSelectors";

describe("Common Selectors", () => {
  it("Should return vehicle", () => {
    const state = {
      vehicle: { id: 1 }
    };

    const vehicle = selectors.selectVehicle(state);
    expect(vehicle.id).toBe(state.vehicle.id);
  });
  it("Should return vehicleInformation", () => {
    const state = {
      vehicleInformation: { make: "Audi" }
    };

    const vehicleInformation = selectors.selectVehicleInformation(state);
    expect(vehicleInformation.make).toBe(state.vehicleInformation.make);
  });
});
