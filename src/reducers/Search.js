import { SET_SEARCH_INPUT, SEARCH_FETCHING, SEARCH_FAILURE, SEARCH_SUCCESS } from '../constants'

const initialState = {
    searchInput: '',
    photos: [],
    searchFetching: false,
    searchFailure: false,
    searchSuccess: false
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_FETCHING:
            return {
                ...state,
                searchFetching: true,
                searchFailure: false,
                searchSuccess: false
            };
        case SEARCH_SUCCESS:
            return {
                ...state,
                photos: action.payload,
                searchFetching: false,
                searchFailure: false,
                searchSuccess: true
            };
        case SEARCH_FAILURE:
            return {
                ...state,
                searchFetching: false,
                searchFailure: true,
                searchSuccess: false
            };
        case SET_SEARCH_INPUT:
            return {
                ...state,
                searchInput: action.payload
            }
        default:
            return state
    }
}