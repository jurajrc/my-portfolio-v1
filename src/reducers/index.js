import openNavReducer from "./openNav";
import { combineReducers } from "redux";

// here add next State
const allReducers = combineReducers({
    isOpenNav: openNavReducer,
})

export default allReducers;