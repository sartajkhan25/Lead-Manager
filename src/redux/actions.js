import {
  FETCH_LEADS_REQUEST,
  FETCH_LEADS_SUCCESS,
  FETCH_LEADS_FAILURE,
} from "./types";
import axios from "axios";


export const fetchleadsrequest = () => {
  return {
    type: FETCH_LEADS_REQUEST,
  };
};
export const fetchleadssuccess = (users) => {
  return {
    type: FETCH_LEADS_SUCCESS,
    payload: users,
  };
};
export const fetchleadsfailure = (error) => {
  return {
    type: FETCH_LEADS_FAILURE,
    payload: error,
  };
};
export const fetchleads = () => {
  console.log('data fetching: outside Function')
  return async (dispatch) => {
    console.log('data fetching: incide Function')
    dispatch(fetchleadsrequest);
    await axios.get('https://mapi.indiamart.com/wservce/enquiry/listing/GLUSR_MOBILE/9811846214/GLUSR_MOBILE_KEY/MTYwNjE5NjU1MC4xMTc4IzI2NTY4Njg=/Start_Time/14-06-2021/End_Time/16-06-2021/')
    .then((data) => console.log(data.data))
      // .then((response) => {
      //   const users = response.data;
      //   console.log(users);
      //   dispatch(fetchleadssuccess(users));
      // })
      .catch((error) => {
        console.log(error);
        dispatch(fetchleadsfailure(error));
      });
  };
};
