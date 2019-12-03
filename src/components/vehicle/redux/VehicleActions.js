import types from "./VehicleConstants";
import { createHttpAction } from "../../../redux/actions/commonActions";

const allCarFields = `
  id
  model
  make
  trim
  engineType
  physicalStatus
  legalStatus
  sellingStatus
  financialDetails {
    purchaseDate
    purchasePrice
    purchaseLocation
    paymentDonePercentage
    sellingPrice
    sellingDate
    sellingLocation
    sellingDonePercentage
    margin
  }
`;

export const fetchVehicle = id =>
  createHttpAction({
    type: types.FETCH_VEHICLE,
    query: `{
      car(id:"${id}"){
        ${allCarFields}
      }
    }`
  });

export const updateVehicle = car => {
  // CarInput for the updateCar(...) operation in the graphQL schema
  // doesn't include the financialDetails property, so we remove it
  delete car.financialDetails;

  const query = `
    mutation UpdateCar($car: CarInput!) {
      updateCar(car: $car){
        ${allCarFields}
      }
    }
  `;
  return createHttpAction({
    type: types.UPDATE_VEHICLES,
    method: "POST",
    body: {
      query,
      variables: { car }
    }
  });
};

const fetchData = (field, args = "") => {
  const query = args !== "" ? `${field}(${args})` : `${field}`;
  return createHttpAction({
    type: types.FETCH_DATA,
    method: "GET",
    query: `{${query}}`
  });
};

export const fetchMake = () => fetchData("make");
export const fetchModel = make => fetchData("model", `make:"${make}"`);
export const fetchTrim = (make, model) =>
  fetchData("trim", `make: "${make}", model: "${model}"`);
