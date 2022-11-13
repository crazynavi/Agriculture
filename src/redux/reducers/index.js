import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";


export default combineReducers({
    weatherReducer: weatherReducer
})

