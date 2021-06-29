import addCompReducer from "./redux/jobApplied/reducers";
import fetchReducer from "./redux/reducers";
import { combineReducers } from "redux";
import AddingCompanyObjReducer from "./redux/jobApplied/reducers/AddingCompanyObj";
import deleteDatabaseReducer from "./redux/jobApplied/reducers/deleteDatabaseReducer";

export const rootReducer = combineReducers({
    company:addCompReducer,
    insiamart:fetchReducer,
    addingCompObj: AddingCompanyObjReducer,
    del: deleteDatabaseReducer
})
