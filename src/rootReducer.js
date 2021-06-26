import fetchReducer from "./redux/reducers";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    insiamart:fetchReducer
})
