import { ADD_COMPANY } from "./types";

const initialState={
    isaddCompanyBtnClicked: false
}
const addCompReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_COMPANY: return{
            isaddCompanyBtnClicked: action.payload
        }
        default: return state
    }

}

export default addCompReducer;