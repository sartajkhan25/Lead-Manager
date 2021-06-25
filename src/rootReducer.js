import addCompReducer from "./redux/jobApplied/reducers";
import fetchReducer from "./redux/reducers";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    company:addCompReducer,
    insiamart:fetchReducer
})
