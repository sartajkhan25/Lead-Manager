import {ADDING_NEW_COMPANY_OBJ} from '../types'

const AddingCompanyObjReducer = (state={CompObj:[]}, action) =>{
    switch(action.type){
        
        case ADDING_NEW_COMPANY_OBJ: return{
            ...state,
            CompObj: action.payload
        } 
        default: return state
    }
}

export default AddingCompanyObjReducer