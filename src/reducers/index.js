import { combineReducers } from 'redux'
import todoReduces from "./todoReducer";

const rootReducer = combineReducers({
    todoReduces
})

export default rootReducer;