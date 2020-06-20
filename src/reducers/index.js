import { combineReducers } from "redux";
import { searchReducer } from "./Search";
import { modalReducer } from "./Modal";


export const rootReducer = combineReducers({
    search: searchReducer,
    modal: modalReducer
})