import { combineReducers } from "redux";
import posts from "./reducers";
const reducers = combineReducers({
  posts,
});
export default reducers;
