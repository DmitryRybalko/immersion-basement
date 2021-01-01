import { combineReducers } from "redux";
import { immersionReducer } from "./immersionReducer";
import detailsReducer from "./detailsReducer";
import logInReducer from "./logInReducer";

const rootReducer = combineReducers({
  immersion: immersionReducer,
  details: detailsReducer,
  log_in: logInReducer,
});

export default rootReducer;
