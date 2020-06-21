import { ADD_FAVORITES, REMOVE_FAVORITES } from "../constants";

export const addFavorites = (payload) => ({
    type: ADD_FAVORITES,
    payload 
})

export const removeFavorites = (payload) => ({
    type: REMOVE_FAVORITES,
    payload 
})