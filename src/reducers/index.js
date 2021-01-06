import addText from "./addText";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    text : addText
});

export default allReducers;