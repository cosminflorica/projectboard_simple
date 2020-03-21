import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import projectTaskReducer from "./projectTaskReducer";

export default combineReducers({
  //reducers
  errors: errorsReducer,
  project_task: projectTaskReducer
});