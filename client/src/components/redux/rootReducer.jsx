import { combineReducers } from "@reduxjs/toolkit";
import employeeReducer from "./employee/employeeReducer";

const rootReducer = combineReducers({
    employee : employeeReducer
})

export default rootReducer