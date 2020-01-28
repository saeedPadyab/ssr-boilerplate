import { combineReducers } from "redux";
import users from "./userReducer";
import auth from "./authReducer";
import admins from "./adminReducer";
export default combineReducers({
  users,
  auth,
  admins
});
