import { combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";

const rootReudcer = combineReducers({
  todoState: todoReducer,
});

export default rootReudcer;
