import { createStore } from "redux";
import rootReudcer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReudcer, composeWithDevTools());
export default store;
