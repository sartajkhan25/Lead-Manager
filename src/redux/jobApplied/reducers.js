import { ADD_NEW_COMPANY } from "./types";

const initialState = {
  isaddCompanyBtnClicked: false,
};
const addCompReducer = (state = initialState, action) => {
  console.log("Reducer Renders", state);
  switch (action.type) {
    case ADD_NEW_COMPANY:
      return {
        ...state,
        isaddCompanyBtnClicked: true,
      };
    default:
      return state;
  }
};

export default addCompReducer;
