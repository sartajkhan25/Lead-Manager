import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
// import fetchReducer from "./redux/reducers";
import { rootReducer } from "./rootReducer";

// const initialState = {};
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
