import openNavReducer from "./openNav";
import showNavReducer from "./showNav";
import { combineReducers } from "redux";

// here add next State
const allReducers = combineReducers({
    isOpenNav: openNavReducer,
    isShowNav: showNavReducer,
})

export default allReducers;