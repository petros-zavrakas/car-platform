import { combineReducers } from "redux";
import {
  vehicle,
  vehicleInformation
} from "../components/vehicle/redux/VehicleReducer";
import tasks from "../components/tasks/TasksReducer";
import { isFetching, errorsReducer } from "../redux/reducers/commonReducers";

const rootReducer = combineReducers({
  vehicle,
  vehicleInformation,
  tasks,
  isFetching,
  errors: errorsReducer
});

export default rootReducer;
