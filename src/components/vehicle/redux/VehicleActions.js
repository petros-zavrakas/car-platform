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
    }`,
    errorMessage:
      "Unfortunatelly we could't retrieve information for the vehicle."
  });

export const updateVehicle = car => {
  // CarInput for the updateCar(...) operation in the graphQL schema
  // doesn't include the financialDetails property, so we remove it
  delete car.financialDetails;

  const query = `
    mutation UpdateCar($car: CarInput!) {
      updateCar(carr: $car){
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
    },
    errorMessage: `Unfortunatelly we could't update the information of the vehicle.`
  });
};

const fetchData = (field, args = "") => {
  const query = args !== "" ? `${field}(${args})` : `${field}`;
  return createHttpAction({
    type: types.FETCH_DATA,
    method: "GET",
    query: `{${query}}`,
    errorMessage: `Unfortunatelly we could't retrieve vehicle's ${field} information.`
  });
};

export const fetchMake = () => fetchData("make");
export const fetchModel = make => fetchData("model", `make:"${make}"`);
export const fetchTrim = (make, model) =>
  fetchData("trim", `make: "${make}", model: "${model}"`);
