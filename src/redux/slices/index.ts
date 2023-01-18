import { combineReducers } from "@reduxjs/toolkit";
import polylineReducer from "./polyline";

const rootReducer = combineReducers({
  polyline: polylineReducer,
});

export default rootReducer;
