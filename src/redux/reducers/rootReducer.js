import graph1Reducer from "./graph1Reducer";
import graph2Reducer from "./graph2Reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  graph1Reducer,
  graph2Reducer,
});

export default rootReducer;
