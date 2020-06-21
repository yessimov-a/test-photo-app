import { combineReducers } from "redux";
import { searchReducer } from "./Search";
import { modalReducer } from "./Modal";
import { favoritesReducer } from "./Favorites";


export const rootReducer = combineReducers({
    search: searchReducer,
    modal: modalReducer,
    favorites: favoritesReducer
})