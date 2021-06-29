import { ADD_NEW_COMPANY } from "./types";
import { ADDING_NEW_COMPANY_OBJ } from "./types";
import { DELETE_DATABASE } from "./types";


export const addNewCompany = () => {
  console.log("Action Renders");
  return {
    type: ADD_NEW_COMPANY,
  };
};

export const addingNewCompanyObj = (data) =>{
  if (!localStorage.getItem('companyDatabase')){
    localStorage.setItem("companyDatabase", '[]' )
  }
    let companyDatabase = JSON.parse(localStorage.getItem('companyDatabase'))
    if (!localStorage.getItem('JobId')){
      localStorage.setItem('JobId', '0')
    }
    data.id = JSON.parse(localStorage.getItem('JobId')) + 1
    localStorage.setItem('JobId', JSON.stringify(data.id) )
    console.log(data)
    companyDatabase.push(data)
    localStorage.setItem("companyDatabase", JSON.stringify(companyDatabase) )
 
    return {
        type: ADDING_NEW_COMPANY_OBJ,
        payload: companyDatabase
      };
}

export const deleteDatabase = ()=>{
  return{
    type: DELETE_DATABASE
  }
}