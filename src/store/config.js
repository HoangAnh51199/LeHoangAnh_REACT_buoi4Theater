import { combineReducers, createStore } from "redux";
import { datGheReducer } from "./reducer/datGheReducer";
// object literals key vs value giống nhau thì bỏ value
const rootReducer = combineReducers({
  datGheReducer: datGheReducer,
  });
  
  export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  // SHALLOW COMPARE (SO SANH THEO ĐỊA CHỈ VÙNG NHỚ)
  // oldState , newState
  // oldState === newState
  