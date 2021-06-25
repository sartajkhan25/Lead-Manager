import {
  FETCH_LEADS_REQUEST,
  FETCH_LEADS_SUCCESS,
  FETCH_LEADS_FAILURE,
} from "./types";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LEADS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LEADS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_LEADS_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchReducer;
