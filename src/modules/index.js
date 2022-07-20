import { combineReducers } from "redux";
//루트 리듀서 : 한 프로젝트에 여러개의 리듀서가 있을때 하나로 합칠때 사용.
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
