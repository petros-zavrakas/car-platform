import { combineReducers } from "redux";
import {
  vehicle,
  vehicleInformation
} from "../components/vehicle/VehicleReducer";
import tasks from "../components/tasks/TasksReducer";
import {
  isFetching,
  errorMessage
} from "../common/redux/reducers/commonReducers";

const rootReducer = combineReducers({
  vehicle,
  vehicleInformation,
  tasks,
  isFetching,
  errorMessage
});

export default rootReducer;
