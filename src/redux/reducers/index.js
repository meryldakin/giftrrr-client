import { combineReducers } from "redux";
import gifts from "./gifts";
import friends from "./friends";
import occasions from "./occasions"

export default combineReducers({
  gifts,
  friends,
  occasions
});
