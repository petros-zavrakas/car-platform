import { combineReducers } from "redux";
import {
  vehicle,
  vehicleInformation
} from "../components/vehicle/redux/VehicleReducer";
import tasks from "../components/tasks/TasksReducer";
import {
  isFetching,
  errorMessage
} from "../redux/reducers/commonReducers";

const rootReducer = combineReducers({
  vehicle,
  vehicleInformation,
  tasks,
  isFetching,
  errorMessage
});

export default rootReducer;
