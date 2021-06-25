import { ADD_COMPANY } from "./types";

const databaseAray = []


export const addingComp = ()=>{
    console.log('btn db gya')
//    let isAddCompanyBtn = true
    return{
        type: ADD_COMPANY,
        payload: true
    }
}

export const newCompanyPush =(newCo)=>{
    console.log(newCo);
    databaseAray.push(newCo)
    console.log(databaseAray)

}