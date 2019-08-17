/*
This is root reducer,
combining all children reducers.
*/

import { combineReducers } from 'redux';
import headerReducer from "./headerReducer.js";
import sideBarReducer from "./sideBarReducer.js";
//import templeteReducer from "./templeteReducer.js";
import LeftBarReducer from "./leftBarReducer.js";

const rootReducer = combineReducers({
  headerReducer,
  sideBarReducer,
  //templeteReducer,
  LeftBarReducer
});

export default rootReducer;
