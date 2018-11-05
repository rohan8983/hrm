import { combineReducers } from "redux";
import login from "./Components/Login/reducer";
import { dashboard } from "./Components/Dashboard/reducer";

export default combineReducers({ login, dashboard });
