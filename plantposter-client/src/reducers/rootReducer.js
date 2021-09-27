import { combineReducers } from "redux"
import plantsReducer from "./plantsReducer"

export const rootReducer = combineReducers({
    plants: plantsReducer
})