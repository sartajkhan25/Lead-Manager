import { DELETE_DATABASE } from "../types"

const deleteDatabaseReducer = (state={delete: 0}, action) =>{
    switch(action.type){
        
        case DELETE_DATABASE: return{
            ...state,
            delete: 1
        } 
        default: return state
    }
}

export default deleteDatabaseReducer