import { combineReducers } from 'redux'
import todoReducers from "./todoReducer";

const rootReducer = combineReducers({
    todoReducers
})

export default rootReducer;