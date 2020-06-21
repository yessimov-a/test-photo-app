import { ADD_FAVORITES, REMOVE_FAVORITES } from "../constants"

const initialState = {
    favoritesPhotos: []
}

export const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITES:
            return {
                ...state,
                favoritesPhotos: [...state.favoritesPhotos, action.payload]
            }
        case REMOVE_FAVORITES:
            return {
                ...state,
                favoritesPhotos: state.favoritesPhotos.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}